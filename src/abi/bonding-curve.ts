import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    TokensPurchased: event("0x0b9c8304b83df3d2827b952a8e4c87faef3556dddcde57a47cb80f0c755606a5", "TokensPurchased(address,address,uint256,uint256,uint256,uint256)", {"buyer": indexed(p.address), "curveAddress": indexed(p.address), "buyTokenAmount": p.uint256, "vstSpent": p.uint256, "currentCost": p.uint256, "timestamp": p.uint256}),
    TokensSold: event("0x7bb7d75a26cf0ec5e66d271f759924252ed21586b985a2dbfa2e8bdaf249df49", "TokensSold(address,address,uint256,uint256,uint256,uint256,uint256)", {"seller": indexed(p.address), "curveAddress": indexed(p.address), "sellTokenAmount": p.uint256, "vstReceived": p.uint256, "taxPaid": p.uint256, "currentCost": p.uint256, "timestamp": p.uint256}),
}

export const functions = {
    buy: fun("0x59a87bc1", "buy(uint256,uint256,address)", {"_buyAmount": p.uint256, "_maxVSTCost": p.uint256, "_bc": p.address}, ),
    buyFromToken: fun("0x6b79dee6", "buyFromToken((uint256,uint256,address[],address[],address[]),uint256,address)", {"_trade": p.struct({"amountIn": p.uint256, "amountOut": p.uint256, "path": p.array(p.address), "adapters": p.array(p.address), "recipients": p.array(p.address)}), "_buyAmount": p.uint256, "_bc": p.address}, ),
    sell: fun("0xd04c6983", "sell(uint256,uint256,address)", {"_sellAmount": p.uint256, "_minVSTReceived": p.uint256, "_bc": p.address}, ),
    vst: viewFun("0xeac9015e", "vst()", {}, p.address),
}

export class Contract extends ContractBase {

    vst() {
        return this.eth_call(functions.vst, {})
    }
}

/// Event types
export type TokensPurchasedEventArgs = EParams<typeof events.TokensPurchased>
export type TokensSoldEventArgs = EParams<typeof events.TokensSold>

/// Function types
export type BuyParams = FunctionArguments<typeof functions.buy>
export type BuyReturn = FunctionReturn<typeof functions.buy>

export type BuyFromTokenParams = FunctionArguments<typeof functions.buyFromToken>
export type BuyFromTokenReturn = FunctionReturn<typeof functions.buyFromToken>

export type SellParams = FunctionArguments<typeof functions.sell>
export type SellReturn = FunctionReturn<typeof functions.sell>

export type VstParams = FunctionArguments<typeof functions.vst>
export type VstReturn = FunctionReturn<typeof functions.vst>

