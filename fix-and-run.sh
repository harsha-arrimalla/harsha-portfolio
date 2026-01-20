#!/bin/bash

echo "🔧 Fixing permissions and starting server..."
echo ""

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Kill existing servers
echo "🛑 Stopping existing servers..."
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:3001 | xargs kill -9 2>/dev/null
sleep 2

# Fix permissions on node_modules
echo "🔐 Fixing node_modules permissions..."
chmod -R u+r node_modules 2>/dev/null || echo "⚠️  Could not fix all permissions (may need sudo)"

# Fix .env.local permissions
echo "🔐 Fixing .env.local permissions..."
chmod 644 .env.local 2>/dev/null || echo "⚠️  Could not fix .env.local permissions"

# Clear Next.js cache
echo "🧹 Clearing Next.js cache..."
rm -rf .next

# Verify .env.local exists
if [ ! -f .env.local ]; then
  echo "📝 Creating .env.local..."
  cat > .env.local << 'EOF'
GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM
EOF
  chmod 644 .env.local
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 Starting development server..."
echo "   Open http://localhost:3000 after it starts"
echo ""

npm run dev
