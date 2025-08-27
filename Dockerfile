# Use Node.js 22 LTS as base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install build dependencies needed for native modules
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Remove dev dependencies to reduce image size
RUN npm prune --omit=dev

# Set the main command
CMD ["sh", "-c", "npm run migration:apply && npm run process:prod"]