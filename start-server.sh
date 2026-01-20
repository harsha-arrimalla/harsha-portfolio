#!/bin/bash

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node 18
nvm use 18

# Clear Next.js cache
rm -rf .next

# Start dev server
echo "🚀 Starting development server..."
npm run dev
