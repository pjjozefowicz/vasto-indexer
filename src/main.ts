import { TypeormDatabase } from "@subsquid/typeorm-store";
import { BigDecimal } from "@subsquid/big-decimal";
import * as ethers from "ethers";
import * as bondingCurve from "./abi/bonding-curve";
import * as lp from "./abi/lp";
import { BondingCurveTransaction, VSTPrice, TransactionType } from "./model";
import { LP_ADDRESS, BONDING_CURVE_ADDRES, processor } from "./processor";

let latestVSTPrice: VSTPrice | undefined;
let isInitialized = false;

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  let bondingCurveTransactions: BondingCurveTransaction[] = [];
  let vstPrices: VSTPrice[] = [];

  const USDC_DECIMALS = 6;
  const VST_DECIMALS = 18;

  // Initialize latest price only once when indexer starts
  if (!isInitialized) {
    const prices = await ctx.store.find(VSTPrice, {
      order: { timestamp: "DESC" },
      take: 1,
    });
    latestVSTPrice = prices.length > 0 ? prices[0] : undefined;
    isInitialized = true;
  }

  for (let block of ctx.blocks) {
    for (let log of block.logs) {
      if (ethers.getAddress(log.address) === LP_ADDRESS) {
        if (log.topics[0] === lp.events.Sync.topic) {
          let event = lp.events.Sync.decode(log);
          const usdcAmount = Number(event.reserve0) / 10 ** USDC_DECIMALS;
          const vstAmount = Number(event.reserve1) / 10 ** VST_DECIMALS;
          const priceUSD =
            vstAmount > 0 ? BigDecimal(usdcAmount / vstAmount) : BigDecimal(0);

          const vstPrice = new VSTPrice({
            id: log.id,
            blockNumber: log.transaction?.block.height || 0,
            timestamp: new Date(log.transaction?.block.timestamp || 0),
            txHash: log.transaction?.hash || "0x",
            reserveUSDC: event.reserve0,
            reserveVST: event.reserve1,
            priceUSD: priceUSD,
          });

          vstPrices.push(vstPrice);
          latestVSTPrice = vstPrice;
        }
      }

      if (ethers.getAddress(log.address) === BONDING_CURVE_ADDRES) {
        if (log.topics[0] === bondingCurve.events.TokensPurchased.topic) {
          let event = bondingCurve.events.TokensPurchased.decode(log);

          bondingCurveTransactions.push(
            new BondingCurveTransaction({
              id: log.id,
              blockNumber: log.transaction?.block.height || 0,
              timestamp: new Date(log.transaction?.block.timestamp || 0),
              txHash: log.transaction?.hash || "0x",
              type: TransactionType.BUY,
              trader: ethers.getAddress(event.buyer),
              curveAddress: ethers.getAddress(event.curveAddress),
              tokenAmount: event.buyTokenAmount,
              vstAmount: event.vstSpent,
              currentCost: event.currentCost,
              eventTimestamp: event.timestamp,
              taxPaid: null,
              vstPrice: latestVSTPrice,
            })
          );
        }

        if (log.topics[0] === bondingCurve.events.TokensSold.topic) {
          let event = bondingCurve.events.TokensSold.decode(log);

          bondingCurveTransactions.push(
            new BondingCurveTransaction({
              id: log.id,
              blockNumber: log.transaction?.block.height || 0,
              timestamp: new Date(log.transaction?.block.timestamp || 0),
              txHash: log.transaction?.hash || "0x",
              type: TransactionType.SELL,
              trader: ethers.getAddress(event.seller),
              curveAddress: ethers.getAddress(event.curveAddress),
              tokenAmount: event.sellTokenAmount,
              vstAmount: event.vstReceived,
              currentCost: event.currentCost,
              eventTimestamp: event.timestamp,
              taxPaid: event.taxPaid,
              vstPrice: latestVSTPrice,
            })
          );
        }
      }
    }
  }

  await ctx.store.insert(vstPrices);
  await ctx.store.insert(bondingCurveTransactions);
});
