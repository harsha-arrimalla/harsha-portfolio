#!/bin/bash

echo "🔧 Fixing permissions..."

# Navigate to project
cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# Fix all permissions
chmod -R 755 node_modules 2>/dev/null || true
chmod 644 .env.local 2>/dev/null || true
chmod 644 package.json 2>/dev/null || true
chmod 644 package-lock.json 2>/dev/null || true

# Kill any existing servers
lsof -ti:3000,3001 | xargs kill -9 2>/dev/null || true

echo "✅ Permissions fixed!"
echo ""
echo "🚀 Starting server..."

# Load NVM and start server
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8
npm run dev
