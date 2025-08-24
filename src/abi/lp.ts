import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    Approval: event("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925", "Approval(address,address,uint256)", {"owner": indexed(p.address), "spender": indexed(p.address), "value": p.uint256}),
    Burn: event("0xdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496", "Burn(address,uint256,uint256,address)", {"sender": indexed(p.address), "amount0": p.uint256, "amount1": p.uint256, "to": indexed(p.address)}),
    DrainWrongToken: event("0x368a9dc863ecb94b5ba32a682e26295b10d9c2666fad7d785ebdf262c3c52413", "DrainWrongToken(address,address)", {"token": indexed(p.address), "to": p.address}),
    FeePercentUpdated: event("0xa4877b8ecb5a00ba277e4bceeeb187a669e7113649774dfbea05c259ce27f17b", "FeePercentUpdated(uint16,uint16)", {"token0FeePercent": p.uint16, "token1FeePercent": p.uint16}),
    Mint: event("0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f", "Mint(address,uint256,uint256)", {"sender": indexed(p.address), "amount0": p.uint256, "amount1": p.uint256}),
    SetPairTypeImmutable: event("0x09122c41ae733a4d7740324d50e35fbd6ee85be3c1312a45596d8045150ab2f2", "SetPairTypeImmutable()", {}),
    SetStableSwap: event("0xb6a86710bde53aa7fb1b3856279e2af5b476d53e2dd0902cf17a0911b5a43a8b", "SetStableSwap(bool,bool)", {"prevStableSwap": p.bool, "stableSwap": p.bool}),
    Skim: event("0x21ad22495c9c75cd1c94756f91824e779c0c8a8e168b267c790df464fe056b79", "Skim()", {}),
    Swap: event("0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822", "Swap(address,uint256,uint256,uint256,uint256,address)", {"sender": indexed(p.address), "amount0In": p.uint256, "amount1In": p.uint256, "amount0Out": p.uint256, "amount1Out": p.uint256, "to": indexed(p.address)}),
    Sync: event("0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1", "Sync(uint112,uint112)", {"reserve0": p.uint112, "reserve1": p.uint112}),
    Transfer: event("0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "Transfer(address,address,uint256)", {"from": indexed(p.address), "to": indexed(p.address), "value": p.uint256}),
}

export const functions = {
    DOMAIN_SEPARATOR: viewFun("0x3644e515", "DOMAIN_SEPARATOR()", {}, p.bytes32),
    FEE_DENOMINATOR: viewFun("0xd73792a9", "FEE_DENOMINATOR()", {}, p.uint256),
    MAX_FEE_PERCENT: viewFun("0x67d81740", "MAX_FEE_PERCENT()", {}, p.uint256),
    MINIMUM_LIQUIDITY: viewFun("0xba9a7a56", "MINIMUM_LIQUIDITY()", {}, p.uint256),
    PERMIT_TYPEHASH: viewFun("0x30adf81f", "PERMIT_TYPEHASH()", {}, p.bytes32),
    allowance: viewFun("0xdd62ed3e", "allowance(address,address)", {"_0": p.address, "_1": p.address}, p.uint256),
    approve: fun("0x095ea7b3", "approve(address,uint256)", {"spender": p.address, "value": p.uint256}, p.bool),
    balanceOf: viewFun("0x70a08231", "balanceOf(address)", {"_0": p.address}, p.uint256),
    burn: fun("0x89afcb44", "burn(address)", {"to": p.address}, {"amount0": p.uint256, "amount1": p.uint256}),
    decimals: viewFun("0x313ce567", "decimals()", {}, p.uint8),
    drainWrongToken: fun("0xf39ac11f", "drainWrongToken(address,address)", {"token": p.address, "to": p.address}, ),
    factory: viewFun("0xc45a0155", "factory()", {}, p.address),
    getAmountOut: viewFun("0xf140a35a", "getAmountOut(uint256,address)", {"amountIn": p.uint256, "tokenIn": p.address}, p.uint256),
    getReserves: viewFun("0x0902f1ac", "getReserves()", {}, {"_reserve0": p.uint112, "_reserve1": p.uint112, "_token0FeePercent": p.uint16, "_token1FeePercent": p.uint16}),
    initialize: fun("0x485cc955", "initialize(address,address)", {"_token0": p.address, "_token1": p.address}, ),
    initialized: viewFun("0x158ef93e", "initialized()", {}, p.bool),
    kLast: viewFun("0x7464fc3d", "kLast()", {}, p.uint256),
    mint: fun("0x6a627842", "mint(address)", {"to": p.address}, p.uint256),
    name: viewFun("0x06fdde03", "name()", {}, p.string),
    nonces: viewFun("0x7ecebe00", "nonces(address)", {"_0": p.address}, p.uint256),
    pairTypeImmutable: viewFun("0xb6200b07", "pairTypeImmutable()", {}, p.bool),
    permit: fun("0xd505accf", "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)", {"owner": p.address, "spender": p.address, "value": p.uint256, "deadline": p.uint256, "v": p.uint8, "r": p.bytes32, "s": p.bytes32}, ),
    precisionMultiplier0: viewFun("0x3b9f1dc0", "precisionMultiplier0()", {}, p.uint256),
    precisionMultiplier1: viewFun("0x288e5d02", "precisionMultiplier1()", {}, p.uint256),
    setFeePercent: fun("0x48e5d260", "setFeePercent(uint16,uint16)", {"newToken0FeePercent": p.uint16, "newToken1FeePercent": p.uint16}, ),
    setPairTypeImmutable: fun("0x3ba17077", "setPairTypeImmutable()", {}, ),
    setStableSwap: fun("0x3029e5d4", "setStableSwap(bool,uint112,uint112)", {"stable": p.bool, "expectedReserve0": p.uint112, "expectedReserve1": p.uint112}, ),
    skim: fun("0xbc25cf77", "skim(address)", {"to": p.address}, ),
    stableSwap: viewFun("0x9e548b7f", "stableSwap()", {}, p.bool),
    'swap(uint256,uint256,address,bytes)': fun("0x022c0d9f", "swap(uint256,uint256,address,bytes)", {"amount0Out": p.uint256, "amount1Out": p.uint256, "to": p.address, "data": p.bytes}, ),
    'swap(uint256,uint256,address,bytes,address)': fun("0x6e1fdd7f", "swap(uint256,uint256,address,bytes,address)", {"amount0Out": p.uint256, "amount1Out": p.uint256, "to": p.address, "data": p.bytes, "referrer": p.address}, ),
    symbol: viewFun("0x95d89b41", "symbol()", {}, p.string),
    sync: fun("0xfff6cae9", "sync()", {}, ),
    token0: viewFun("0x0dfe1681", "token0()", {}, p.address),
    token0FeePercent: viewFun("0x62ecec03", "token0FeePercent()", {}, p.uint16),
    token1: viewFun("0xd21220a7", "token1()", {}, p.address),
    token1FeePercent: viewFun("0x2fcd1692", "token1FeePercent()", {}, p.uint16),
    totalSupply: viewFun("0x18160ddd", "totalSupply()", {}, p.uint256),
    transfer: fun("0xa9059cbb", "transfer(address,uint256)", {"to": p.address, "value": p.uint256}, p.bool),
    transferFrom: fun("0x23b872dd", "transferFrom(address,address,uint256)", {"from": p.address, "to": p.address, "value": p.uint256}, p.bool),
}

export class Contract extends ContractBase {

    DOMAIN_SEPARATOR() {
        return this.eth_call(functions.DOMAIN_SEPARATOR, {})
    }

    FEE_DENOMINATOR() {
        return this.eth_call(functions.FEE_DENOMINATOR, {})
    }

    MAX_FEE_PERCENT() {
        return this.eth_call(functions.MAX_FEE_PERCENT, {})
    }

    MINIMUM_LIQUIDITY() {
        return this.eth_call(functions.MINIMUM_LIQUIDITY, {})
    }

    PERMIT_TYPEHASH() {
        return this.eth_call(functions.PERMIT_TYPEHASH, {})
    }

    allowance(_0: AllowanceParams["_0"], _1: AllowanceParams["_1"]) {
        return this.eth_call(functions.allowance, {_0, _1})
    }

    balanceOf(_0: BalanceOfParams["_0"]) {
        return this.eth_call(functions.balanceOf, {_0})
    }

    decimals() {
        return this.eth_call(functions.decimals, {})
    }

    factory() {
        return this.eth_call(functions.factory, {})
    }

    getAmountOut(amountIn: GetAmountOutParams["amountIn"], tokenIn: GetAmountOutParams["tokenIn"]) {
        return this.eth_call(functions.getAmountOut, {amountIn, tokenIn})
    }

    getReserves() {
        return this.eth_call(functions.getReserves, {})
    }

    initialized() {
        return this.eth_call(functions.initialized, {})
    }

    kLast() {
        return this.eth_call(functions.kLast, {})
    }

    name() {
        return this.eth_call(functions.name, {})
    }

    nonces(_0: NoncesParams["_0"]) {
        return this.eth_call(functions.nonces, {_0})
    }

    pairTypeImmutable() {
        return this.eth_call(functions.pairTypeImmutable, {})
    }

    precisionMultiplier0() {
        return this.eth_call(functions.precisionMultiplier0, {})
    }

    precisionMultiplier1() {
        return this.eth_call(functions.precisionMultiplier1, {})
    }

    stableSwap() {
        return this.eth_call(functions.stableSwap, {})
    }

    symbol() {
        return this.eth_call(functions.symbol, {})
    }

    token0() {
        return this.eth_call(functions.token0, {})
    }

    token0FeePercent() {
        return this.eth_call(functions.token0FeePercent, {})
    }

    token1() {
        return this.eth_call(functions.token1, {})
    }

    token1FeePercent() {
        return this.eth_call(functions.token1FeePercent, {})
    }

    totalSupply() {
        return this.eth_call(functions.totalSupply, {})
    }
}

/// Event types
export type ApprovalEventArgs = EParams<typeof events.Approval>
export type BurnEventArgs = EParams<typeof events.Burn>
export type DrainWrongTokenEventArgs = EParams<typeof events.DrainWrongToken>
export type FeePercentUpdatedEventArgs = EParams<typeof events.FeePercentUpdated>
export type MintEventArgs = EParams<typeof events.Mint>
export type SetPairTypeImmutableEventArgs = EParams<typeof events.SetPairTypeImmutable>
export type SetStableSwapEventArgs = EParams<typeof events.SetStableSwap>
export type SkimEventArgs = EParams<typeof events.Skim>
export type SwapEventArgs = EParams<typeof events.Swap>
export type SyncEventArgs = EParams<typeof events.Sync>
export type TransferEventArgs = EParams<typeof events.Transfer>

/// Function types
export type DOMAIN_SEPARATORParams = FunctionArguments<typeof functions.DOMAIN_SEPARATOR>
export type DOMAIN_SEPARATORReturn = FunctionReturn<typeof functions.DOMAIN_SEPARATOR>

export type FEE_DENOMINATORParams = FunctionArguments<typeof functions.FEE_DENOMINATOR>
export type FEE_DENOMINATORReturn = FunctionReturn<typeof functions.FEE_DENOMINATOR>

export type MAX_FEE_PERCENTParams = FunctionArguments<typeof functions.MAX_FEE_PERCENT>
export type MAX_FEE_PERCENTReturn = FunctionReturn<typeof functions.MAX_FEE_PERCENT>

export type MINIMUM_LIQUIDITYParams = FunctionArguments<typeof functions.MINIMUM_LIQUIDITY>
export type MINIMUM_LIQUIDITYReturn = FunctionReturn<typeof functions.MINIMUM_LIQUIDITY>

export type PERMIT_TYPEHASHParams = FunctionArguments<typeof functions.PERMIT_TYPEHASH>
export type PERMIT_TYPEHASHReturn = FunctionReturn<typeof functions.PERMIT_TYPEHASH>

export type AllowanceParams = FunctionArguments<typeof functions.allowance>
export type AllowanceReturn = FunctionReturn<typeof functions.allowance>

export type ApproveParams = FunctionArguments<typeof functions.approve>
export type ApproveReturn = FunctionReturn<typeof functions.approve>

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>

export type BurnParams = FunctionArguments<typeof functions.burn>
export type BurnReturn = FunctionReturn<typeof functions.burn>

export type DecimalsParams = FunctionArguments<typeof functions.decimals>
export type DecimalsReturn = FunctionReturn<typeof functions.decimals>

export type DrainWrongTokenParams = FunctionArguments<typeof functions.drainWrongToken>
export type DrainWrongTokenReturn = FunctionReturn<typeof functions.drainWrongToken>

export type FactoryParams = FunctionArguments<typeof functions.factory>
export type FactoryReturn = FunctionReturn<typeof functions.factory>

export type GetAmountOutParams = FunctionArguments<typeof functions.getAmountOut>
export type GetAmountOutReturn = FunctionReturn<typeof functions.getAmountOut>

export type GetReservesParams = FunctionArguments<typeof functions.getReserves>
export type GetReservesReturn = FunctionReturn<typeof functions.getReserves>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type InitializedParams = FunctionArguments<typeof functions.initialized>
export type InitializedReturn = FunctionReturn<typeof functions.initialized>

export type KLastParams = FunctionArguments<typeof functions.kLast>
export type KLastReturn = FunctionReturn<typeof functions.kLast>

export type MintParams = FunctionArguments<typeof functions.mint>
export type MintReturn = FunctionReturn<typeof functions.mint>

export type NameParams = FunctionArguments<typeof functions.name>
export type NameReturn = FunctionReturn<typeof functions.name>

export type NoncesParams = FunctionArguments<typeof functions.nonces>
export type NoncesReturn = FunctionReturn<typeof functions.nonces>

export type PairTypeImmutableParams = FunctionArguments<typeof functions.pairTypeImmutable>
export type PairTypeImmutableReturn = FunctionReturn<typeof functions.pairTypeImmutable>

export type PermitParams = FunctionArguments<typeof functions.permit>
export type PermitReturn = FunctionReturn<typeof functions.permit>

export type PrecisionMultiplier0Params = FunctionArguments<typeof functions.precisionMultiplier0>
export type PrecisionMultiplier0Return = FunctionReturn<typeof functions.precisionMultiplier0>

export type PrecisionMultiplier1Params = FunctionArguments<typeof functions.precisionMultiplier1>
export type PrecisionMultiplier1Return = FunctionReturn<typeof functions.precisionMultiplier1>

export type SetFeePercentParams = FunctionArguments<typeof functions.setFeePercent>
export type SetFeePercentReturn = FunctionReturn<typeof functions.setFeePercent>

export type SetPairTypeImmutableParams = FunctionArguments<typeof functions.setPairTypeImmutable>
export type SetPairTypeImmutableReturn = FunctionReturn<typeof functions.setPairTypeImmutable>

export type SetStableSwapParams = FunctionArguments<typeof functions.setStableSwap>
export type SetStableSwapReturn = FunctionReturn<typeof functions.setStableSwap>

export type SkimParams = FunctionArguments<typeof functions.skim>
export type SkimReturn = FunctionReturn<typeof functions.skim>

export type StableSwapParams = FunctionArguments<typeof functions.stableSwap>
export type StableSwapReturn = FunctionReturn<typeof functions.stableSwap>

export type SwapParams_0 = FunctionArguments<typeof functions['swap(uint256,uint256,address,bytes)']>
export type SwapReturn_0 = FunctionReturn<typeof functions['swap(uint256,uint256,address,bytes)']>

export type SwapParams_1 = FunctionArguments<typeof functions['swap(uint256,uint256,address,bytes,address)']>
export type SwapReturn_1 = FunctionReturn<typeof functions['swap(uint256,uint256,address,bytes,address)']>

export type SymbolParams = FunctionArguments<typeof functions.symbol>
export type SymbolReturn = FunctionReturn<typeof functions.symbol>

export type SyncParams = FunctionArguments<typeof functions.sync>
export type SyncReturn = FunctionReturn<typeof functions.sync>

export type Token0Params = FunctionArguments<typeof functions.token0>
export type Token0Return = FunctionReturn<typeof functions.token0>

export type Token0FeePercentParams = FunctionArguments<typeof functions.token0FeePercent>
export type Token0FeePercentReturn = FunctionReturn<typeof functions.token0FeePercent>

export type Token1Params = FunctionArguments<typeof functions.token1>
export type Token1Return = FunctionReturn<typeof functions.token1>

export type Token1FeePercentParams = FunctionArguments<typeof functions.token1FeePercent>
export type Token1FeePercentReturn = FunctionReturn<typeof functions.token1FeePercent>

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>

export type TransferParams = FunctionArguments<typeof functions.transfer>
export type TransferReturn = FunctionReturn<typeof functions.transfer>

export type TransferFromParams = FunctionArguments<typeof functions.transferFrom>
export type TransferFromReturn = FunctionReturn<typeof functions.transferFrom>

