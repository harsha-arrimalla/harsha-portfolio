# Fix Permission Errors - Step by Step

## The Problem

Next.js cannot read files from `node_modules` because of file permission restrictions. This causes 500 errors.

## Solution: Fix File Permissions

### Method 1: Quick Fix (Recommended)

Run this in your terminal:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Kill any running servers
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:3001 | xargs kill -9 2>/dev/null

# Fix node_modules permissions (read access for user)
chmod -R u+r node_modules

# Fix .env.local permissions
chmod 644 .env.local

# Clear Next.js cache
rm -rf .next

# Start server
npm run dev
```

### Method 2: If Method 1 Doesn't Work (Use sudo)

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Kill servers
lsof -ti:3000 | xargs kill -9 2>/dev/null

# Fix permissions with sudo (if needed)
sudo chmod -R u+r node_modules
chmod 644 .env.local

# Clear cache
rm -rf .next

# Start server
npm run dev
```

### Method 3: Complete Clean Reinstall (Nuclear Option)

If permissions are still broken:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 18.20.8

# Kill servers
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:3001 | xargs kill -9 2>/dev/null

# Remove everything
rm -rf node_modules package-lock.json .next

# Reinstall with proper permissions
npm install --legacy-peer-deps

# Create .env.local with proper permissions
cat > .env.local << 'EOF'
GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM
EOF
chmod 644 .env.local

# Verify permissions
ls -la node_modules/next/dist/client/components/router-reducer/ | head -3

# Start server
npm run dev
```

## Verify Permissions Are Fixed

After running the fix, verify:

```bash
# Check node_modules permissions
ls -la node_modules/next/dist/client/components/router-reducer/create-href-from-url.js

# Should show: -r--r--r-- or -rw-r--r--
# If it shows: ?--------- or no read permission, it's still broken
```

## Common Issues

### Issue: "Operation not permitted" even after chmod

**Solution**: The files might be owned by root or another user.

```bash
# Check ownership
ls -la node_modules/next/dist/client/components/router-reducer/ | head -3

# If owned by root, fix ownership
sudo chown -R $(whoami) node_modules
```

### Issue: Still getting 500 errors

**Solution**: Clear everything and reinstall:

```bash
rm -rf node_modules package-lock.json .next
npm install --legacy-peer-deps
rm -rf .next
npm run dev
```

### Issue: Permission denied on .env.local

**Solution**:
```bash
chmod 644 .env.local
# Or recreate it
rm .env.local
echo "GOOGLE_GEMINI_API_KEY=AIzaSyC91K6jPrRfi7oyyWStcFsPa_lSk67_aQM" > .env.local
chmod 644 .env.local
```

## Why This Happens

1. **Sandbox restrictions** - When files are created in restricted environments
2. **npm install issues** - Sometimes npm doesn't set correct permissions
3. **File system issues** - macOS file system permissions can be restrictive

## Prevention

After fixing, to prevent this in the future:

```bash
# Always install with proper user permissions
npm install --legacy-peer-deps

# Set permissions after install
chmod -R u+r node_modules
```

## Expected Result

After fixing permissions, you should see:

```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in Xs
```

And http://localhost:3000 should load **without 500 errors**.

## Quick Test

After fixing, test if it works:

```bash
# Try to read a Next.js file (should work now)
cat node_modules/next/dist/client/components/router-reducer/create-href-from-url.js | head -5
```

If this works, permissions are fixed!
