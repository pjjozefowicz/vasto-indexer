import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"
import {TransactionType} from "./_transactionType"

@Entity_()
export class BondingCurveTransaction {
    constructor(props?: Partial<BondingCurveTransaction>) {
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

    @Column_("varchar", {length: 4, nullable: false})
    type!: TransactionType

    @StringColumn_({nullable: false})
    trader!: string

    @StringColumn_({nullable: false})
    curveAddress!: string

    @BigIntColumn_({nullable: false})
    tokenAmount!: bigint

    @BigIntColumn_({nullable: false})
    vstAmount!: bigint

    @BigIntColumn_({nullable: false})
    currentCost!: bigint

    @BigIntColumn_({nullable: false})
    eventTimestamp!: bigint

    @BigIntColumn_({nullable: true})
    taxPaid!: bigint | undefined | null
}
