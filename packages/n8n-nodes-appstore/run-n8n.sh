#!/bin/bash

echo "🚀 Starting n8n with AppStore Connect node and ngrok..."

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🧹 Cleaning up..."
    if [ ! -z "$NGROK_PID" ]; then
        echo "Stopping ngrok (PID: $NGROK_PID)..."
        kill -TERM $NGROK_PID 2>/dev/null
        sleep 1
        kill -KILL $NGROK_PID 2>/dev/null
    fi
    # Also kill any remaining ngrok processes
    pkill -f "ngrok http 5678" 2>/dev/null
    exit 0
}

# Set up cleanup trap
trap cleanup INT TERM EXIT

# Check if ngrok is available
if command -v ngrok &> /dev/null; then
    echo "Found ngrok at: $(which ngrok)"
    
    # Start ngrok in background
    echo "🚀 Starting ngrok tunnel..."
    ngrok http 5678 >/dev/null 2>&1 &
    NGROK_PID=$!
    echo "✅ ngrok started (PID: $NGROK_PID)"
    
    # Wait for ngrok to start and get tunnel URL
    echo "⏳ Getting tunnel URL..."
    sleep 5
    
    # Get tunnel URL from ngrok API
    TUNNEL_URL=$(curl -s http://127.0.0.1:4040/api/tunnels 2>/dev/null | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    if data.get('tunnels'): print(data['tunnels'][0]['public_url'])
except: pass
" 2>/dev/null)
    
    if [[ -z "$TUNNEL_URL" ]]; then
        echo "⚠️  Could not get tunnel URL, using localhost"
        TUNNEL_URL="http://localhost:5678"
    else
        echo "🌐 Tunnel URL: $TUNNEL_URL"
    fi
else
    echo "⚠️  ngrok not found, using localhost only"
    TUNNEL_URL="http://localhost:5678"
fi

# Build and link the custom node
echo "📦 Building custom node..."
npm run build >/dev/null
npm link >/dev/null

# Set up n8n custom directory
N8N_CUSTOM_DIR="$HOME/.n8n/custom"
mkdir -p "$N8N_CUSTOM_DIR"

# Link the custom node package in n8n custom directory
echo "🔗 Linking custom node in n8n directory..."
cd "$N8N_CUSTOM_DIR"
npm link n8n-nodes-appstore >/dev/null 2>&1
cd - >/dev/null

# Copy .env file if it exists
if [ -f ".env" ]; then
    cp .env "$N8N_CUSTOM_DIR/.env"
    echo "✅ Copied .env file to n8n custom directory"
else
    echo "⚠️  .env file not found in project directory"
fi

# Set environment variable
export WEBHOOK_TUNNEL_URL="$TUNNEL_URL"

echo ""
echo "🎯 Starting n8n..."
echo "📱 Access n8n at: http://localhost:5678"
if [[ "$TUNNEL_URL" != "http://localhost:5678" ]]; then
    echo "🌐 Public tunnel at: $TUNNEL_URL"
fi
echo "🎪 Your AppStore Connect node should be available in the node palette!"
echo ""
echo "Press Ctrl+C to stop both n8n and ngrok"
echo ""

# Change to n8n custom directory and start n8n
cd "$N8N_CUSTOM_DIR"
n8n
