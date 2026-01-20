#!/bin/bash

echo "🔧 Fixing Permission Errors..."
echo ""

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Kill existing servers
echo "🛑 Stopping servers..."
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:3001 | xargs kill -9 2>/dev/null
sleep 2

# Fix node_modules permissions
echo "🔐 Fixing node_modules permissions..."
chmod -R u+r node_modules 2>/dev/null

# Check if it worked
if [ $? -eq 0 ]; then
  echo "✅ node_modules permissions fixed"
else
  echo "⚠️  Regular chmod failed, trying with sudo..."
  sudo chmod -R u+r node_modules
  if [ $? -eq 0 ]; then
    echo "✅ node_modules permissions fixed (with sudo)"
  else
    echo "❌ Still having permission issues"
    echo "   Trying ownership fix..."
    sudo chown -R $(whoami) node_modules
    chmod -R u+r node_modules
  fi
fi

# Fix .env.local
echo "🔐 Fixing .env.local permissions..."
chmod 644 .env.local 2>/dev/null || {
  echo "⚠️  Recreating .env.local..."
  cat > .env.local << 'EOF'
GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM
EOF
  chmod 644 .env.local
}

# Clear cache
echo "🧹 Clearing Next.js cache..."
rm -rf .next

# Verify permissions
echo ""
echo "🔍 Verifying permissions..."
if [ -r "node_modules/next/dist/client/components/router-reducer/create-href-from-url.js" ]; then
  echo "✅ Next.js files are readable"
else
  echo "❌ Next.js files still not readable"
  echo "   You may need to reinstall:"
  echo "   rm -rf node_modules package-lock.json && npm install --legacy-peer-deps"
  exit 1
fi

echo ""
echo "✅ All permissions fixed!"
echo ""
echo "🚀 Starting development server..."
echo ""

npm run dev
