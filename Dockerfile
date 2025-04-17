# Stage 1: Development
FROM node:18-alpine

WORKDIR /app

# Install necessary tools
RUN apk add --no-cache python3 make g++

# Install Angular CLI globally
RUN npm install -g @angular/cli@16

# Create a new Angular project
RUN ng new test-assignment --directory=. --routing=true --style=scss --skip-git --skip-install --defaults

# Copy our custom files over the new project
COPY package*.json ./
COPY src/ ./src/
COPY db.json ./
COPY README.md ./

# Install dependencies
RUN npm install

# Generate Angular Material styles
RUN ng add @angular/material --skip-confirmation

# Expose port 4200
EXPOSE 4200

# The command is now in docker-compose.yml to allow for volume mounting and hot reloading 