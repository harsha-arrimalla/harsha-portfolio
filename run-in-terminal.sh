#!/bin/bash

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Kill existing servers
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:3001 | xargs kill -9 2>/dev/null

# Fix permissions
chmod -R u+r node_modules 2>/dev/null
chmod 644 .env.local 2>/dev/null

# Clear cache
rm -rf .next

echo "✅ Ready to start server"
echo ""
echo "Starting development server..."
npm run dev
