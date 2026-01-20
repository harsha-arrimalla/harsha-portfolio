#!/bin/bash

echo "🧹 Cleaning Next.js cache..."

cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# Remove Next.js cache
rm -rf .next
rm -rf node_modules/.cache

# Fix permissions
chmod -R 755 node_modules 2>/dev/null || true

# Kill existing servers
lsof -ti:3000,3001 | xargs kill -9 2>/dev/null || true

echo "✅ Cache cleared!"
echo ""
echo "🚀 Starting clean server..."

# Load NVM and start
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8
npm run dev
