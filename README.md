# Bonding Curve & VST Price Indexer

A Squid indexer that tracks bonding curve transactions and VST token pricing. The squid fetches historical events from both the bonding curve contract and LP contract, decodes them, and persists transaction data and VST price information to the database.

Dependencies: NodeJS v16 or newer, Git, Docker.

## Local setup

### Install Squid CLI:

```bash
npm i -g @subsquid/cli
```

The Squid CLI uses the `sqd` command and is intended for local development. It reads from `commands.json` which defines various commands for building, migrating, and running the indexer.

### Set env variables

- `LP_ADDRESS` - The VST/USDC LP contract address
- `BONDING_CURVE_ADDRES` - The bonding curve contract address
- `FROM_BLOCK` - Starting block number for indexing
- `RPC_ENDPOINT` - Arbitrum RPC endpoint for fetching blockchain data

### Run locally with Squid CLI

```bash
npm ci
# start a local Postgres
sqd up
# build the squid
sqd build
# start the squid processor
sqd process
```

### Run with Docker Compose

You can also run both the database and indexer in Docker:

```bash
docker compose up
```

This will start a PostgreSQL database and the squid processor in containers, automatically applying migrations and starting the indexer.
