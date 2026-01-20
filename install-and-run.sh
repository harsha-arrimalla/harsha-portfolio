#!/bin/bash

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node.js from NVM
nvm use 18.20.8 2>/dev/null || nvm use default

echo "Installing dependencies..."
npm install

echo ""
echo "✅ Dependencies installed!"
echo ""
echo "Starting development server..."
echo ""

npm run dev
