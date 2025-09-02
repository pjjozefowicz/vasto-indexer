import {BigDecimal} from "@subsquid/big-decimal"
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_, BigDecimalColumn as BigDecimalColumn_, OneToMany as OneToMany_} from "@subsquid/typeorm-store"
import {BondingCurveTransaction} from "./bondingCurveTransaction.model"

@Entity_()
export class VSTPrice {
    constructor(props?: Partial<VSTPrice>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    blockNumber!: number

    @DateTimeColumn_({nullable: false})
    timestamp!: Date

    @StringColumn_({nullable: false})
    txHash!: string

    @BigIntColumn_({nullable: false})
    reserveUSDC!: bigint

    @BigIntColumn_({nullable: false})
    reserveVST!: bigint

    @BigDecimalColumn_({nullable: true})
    priceUSD!: BigDecimal | undefined | null

    @OneToMany_(() => BondingCurveTransaction, e => e.vstPrice)
    bondingCurveTransactions!: BondingCurveTransaction[]
}
