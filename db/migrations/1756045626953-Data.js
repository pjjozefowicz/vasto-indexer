module.exports = class Data1756045626953 {
    name = 'Data1756045626953'

    async up(db) {
        await db.query(`CREATE TABLE "bonding_curve_transaction" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "tx_hash" text NOT NULL, "type" character varying(4) NOT NULL, "trader" text NOT NULL, "curve_address" text NOT NULL, "token_amount" numeric NOT NULL, "vst_amount" numeric NOT NULL, "current_cost" numeric NOT NULL, "event_timestamp" numeric NOT NULL, "tax_paid" numeric, CONSTRAINT "PK_b11febb93d69aa81bb1b75138f6" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "vst_price" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "tx_hash" text NOT NULL, "reserve_usdc" numeric NOT NULL, "reserve_vst" numeric NOT NULL, "price_usd" numeric, CONSTRAINT "PK_2bd8623fb90436a089967f05d11" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "bonding_curve_transaction"`)
        await db.query(`DROP TABLE "vst_price"`)
    }
}
