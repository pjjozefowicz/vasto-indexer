import { assertNotNull } from "@subsquid/util-internal";
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from "@subsquid/evm-processor";
import { Store } from "@subsquid/typeorm-store";
import * as ethers from "ethers";
import * as bondingCurve from "./abi/bonding-curve";
import * as lp from "./abi/lp";

export const LP_ADDRESS = ethers.getAddress(
  assertNotNull(process.env.LP_ADDRESS)
);
export const BONDING_CURVE_ADDRES = ethers.getAddress(
  assertNotNull(process.env.BONDING_CURVE_ADDRES)
);
export const FROM_BLOCK = parseInt(assertNotNull(process.env.FROM_BLOCK));

export const processor = new EvmBatchProcessor()
  .setGateway("https://v2.archive.subsquid.io/network/arbitrum-one")
  // Chain RPC endpoint is required for
  //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
  //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ENDPOINT),
    // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
    rateLimit: 10,
  })
  .setRpcDataIngestionSettings({
    disabled: false,
  })
  .setFinalityConfirmation(75)
  .setFields({
    log: {
      topics: true,
      data: true,
    },
    transaction: {
      hash: true,
    },
  })
  .addLog({
    address: [LP_ADDRESS, BONDING_CURVE_ADDRES],
    topic0: [
      lp.events.Sync.topic,
      bondingCurve.events.TokensPurchased.topic,
      bondingCurve.events.TokensSold.topic,
    ],
    transaction: true,
  })
  .setBlockRange({
    from: FROM_BLOCK,
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Context = DataHandlerContext<Store, Fields>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
