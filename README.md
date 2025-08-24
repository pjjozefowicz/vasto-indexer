# Bonding Curve & VST Price Indexer

A Squid indexer that tracks bonding curve transactions and VST token pricing. The squid fetches historical events from both the bonding curve contract and LP contract, decodes them, and persists transaction data and VST price information to the database.

Dependencies: NodeJS v16 or newer, Git, Docker.

## Setup

- Install Squid CLI:

```bash
npm i -g @subsquid/cli
```

- `LP_ADDRESS` - The VST/USDC LP contract address
- `BONDING_CURVE_ADDRES` - The bonding curve contract address
- `FROM_BLOCK` - Starting block number for indexing
- `RPC_ENDPOINT` - Arbitrum RPC endpoint for fetching blockchain data

## Run

```bash
npm ci
# start a local Postgres
sqd up
# build the squid
sqd build
# start both the squid processor and the GraphQL server
sqd run .
```

A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).

You can also start squid services one by one:

```bash
sqd process
sqd serve
```
