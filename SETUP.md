# Setup Instructions

## Issue: Connection Refused

The server isn't running because Node.js isn't installed or dependencies haven't been installed.

## Step 1: Install Node.js

### Option A: Using Homebrew (Recommended for macOS)

```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

### Option B: Download from Official Website

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version for macOS
3. Run the installer
4. Restart your terminal

### Option C: Using NVM (Node Version Manager)

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or run:
source ~/.zshrc

# Install Node.js
nvm install --lts
nvm use --lts
```

## Step 2: Verify Installation

Open a new terminal and run:

```bash
node --version
npm --version
```

You should see version numbers (e.g., `v20.10.0` and `10.2.3`).

## Step 3: Install Dependencies

Navigate to the project directory:

```bash
cd /Users/harsha/Desktop/projects/portfolio/option-cursor
npm install
```

This will install all required packages. It may take a few minutes.

## Step 4: Start the Development Server

```bash
npm run dev
```

You should see:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in Xs
```

## Step 5: Open in Browser

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Troubleshooting

### Port 3000 Already in Use

If you get an error about port 3000 being in use:

```bash
# Find what's using port 3000
lsof -ti:3000

# Kill the process (replace PID with the number from above)
kill -9 PID

# Or use a different port
PORT=3001 npm run dev
```

### Permission Errors

If you get permission errors:

```bash
# Fix npm permissions (macOS)
sudo chown -R $(whoami) ~/.npm
```

### Module Not Found Errors

If you see module errors:

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Still Having Issues?

1. Make sure you're in the project directory
2. Check that Node.js is installed: `node --version`
3. Try clearing npm cache: `npm cache clean --force`
4. Reinstall dependencies: `rm -rf node_modules && npm install`
