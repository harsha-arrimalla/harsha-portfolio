#!/bin/bash

# New Portfolio Design - Start Server
echo "🎨 Starting new portfolio design..."

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node 18
nvm use 18.20.8

# Kill any existing server
echo "🛑 Stopping any existing server..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Start dev server
echo "🚀 Starting server..."
npm run dev
