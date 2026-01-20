#!/bin/bash

echo "🧹 Clearing cache and restarting..."

cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# Kill existing server
lsof -ti:3000,3001 | xargs kill -9 2>/dev/null || true

# Clear Next.js cache
rm -rf .next

# Fix permissions
chmod -R 755 node_modules 2>/dev/null || true

echo "✅ Cache cleared!"
echo "🚀 Starting server..."

# Load NVM and start
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8
npm run dev
