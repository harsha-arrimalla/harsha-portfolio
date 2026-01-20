#!/bin/bash

echo "🔧 Fixing 500 Internal Server Errors..."

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18

# Kill any existing servers
echo "📛 Killing existing servers..."
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:3001 | xargs kill -9 2>/dev/null
sleep 2

# Fix permissions
echo "🔐 Fixing file permissions..."
chmod -R u+r node_modules 2>/dev/null || sudo chmod -R u+r node_modules
chmod 644 .env.local 2>/dev/null || true

# Clear Next.js cache
echo "🧹 Clearing Next.js cache..."
rm -rf .next

# Check for compilation errors
echo "🔍 Checking for TypeScript errors..."
npx tsc --noEmit --skipLibCheck 2>&1 | head -20

echo ""
echo "✅ Ready to start server!"
echo "🚀 Starting development server..."
echo ""

npm run dev
