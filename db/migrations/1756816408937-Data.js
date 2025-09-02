module.exports = class Data1756816408937 {
    name = 'Data1756816408937'

    async up(db) {
        await db.query(`CREATE TABLE "vst_price" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "tx_hash" text NOT NULL, "reserve_usdc" numeric NOT NULL, "reserve_vst" numeric NOT NULL, "price_usd" numeric, CONSTRAINT "PK_2bd8623fb90436a089967f05d11" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "bonding_curve_transaction" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "tx_hash" text NOT NULL, "type" character varying(4) NOT NULL, "trader" text NOT NULL, "curve_address" text NOT NULL, "token_amount" numeric NOT NULL, "vst_amount" numeric NOT NULL, "current_cost" numeric NOT NULL, "event_timestamp" numeric NOT NULL, "tax_paid" numeric, "vst_price_id" character varying, CONSTRAINT "PK_b11febb93d69aa81bb1b75138f6" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2437c0805d70add6873117d33f" ON "bonding_curve_transaction" ("vst_price_id") `)
        await db.query(`ALTER TABLE "bonding_curve_transaction" ADD CONSTRAINT "FK_2437c0805d70add6873117d33fe" FOREIGN KEY ("vst_price_id") REFERENCES "vst_price"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "vst_price"`)
        await db.query(`DROP TABLE "bonding_curve_transaction"`)
        await db.query(`DROP INDEX "public"."IDX_2437c0805d70add6873117d33f"`)
        await db.query(`ALTER TABLE "bonding_curve_transaction" DROP CONSTRAINT "FK_2437c0805d70add6873117d33fe"`)
    }
}
