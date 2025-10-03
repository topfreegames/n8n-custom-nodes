# Fix encoding issues on non-Windows platforms
if (-not $IsWindows -and $PSVersionTable.PSVersion.Major -ge 6) {
    [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
}

Write-Host "🚀 Starting n8n with AppStore Connect node and ngrok..."

# Detect platform and set appropriate paths
$IsWindowsPlatform = $PSVersionTable.PSVersion.Major -le 5 -or $IsWindows
$tunnelUrl = "http://localhost:5678"  # Default fallback

# Find ngrok based on platform
$ngrokPath = $null
if ($IsWindowsPlatform) {
    # Windows: Check common locations
    $possiblePaths = @(
        "$PWD\ngrok.exe",
        "${env:ProgramFiles}\ngrok\ngrok.exe",
        "${env:LOCALAPPDATA}\ngrok\ngrok.exe"
    )
    foreach ($path in $possiblePaths) {
        if (Test-Path $path) {
            $ngrokPath = $path
            break
        }
    }
    # Try PATH
    if (-not $ngrokPath) {
        try {
            $null = Get-Command ngrok -ErrorAction Stop
            $ngrokPath = "ngrok"
        } catch { }
    }
} else {
    # macOS/Linux: Check common locations and PATH
    $possiblePaths = @("/usr/local/bin/ngrok", "/opt/homebrew/bin/ngrok", "/usr/bin/ngrok", "/snap/bin/ngrok")
    foreach ($path in $possiblePaths) {
        if (Test-Path $path) {
            $ngrokPath = $path
            break
        }
    }
    # Try PATH
    if (-not $ngrokPath) {
        try {
            $result = bash -c "which ngrok" 2>/dev/null
            if ($result) { $ngrokPath = $result.Trim() }
        } catch { }
    }
}

if (-not $ngrokPath) {
    Write-Warning "ngrok not found. Skipping tunnel setup."
    if ($IsWindowsPlatform) {
        Write-Host "Install ngrok: Download from https://ngrok.com and add to PATH"
    } else {
        Write-Host "Install ngrok: brew install ngrok (macOS) or apt/yum install ngrok (Linux)"
    }
    Write-Host "Will use local URL: $tunnelUrl"
}

if ($ngrokPath) {
    Write-Host "Found ngrok at: $ngrokPath"
    
    # Start ngrok in background
    try {
        Write-Host "🚀 Starting ngrok tunnel..."
        
        # Start ngrok (same command works cross-platform)
        $ngrokProcess = Start-Process -FilePath $ngrokPath -ArgumentList "http", "5678" -NoNewWindow -PassThru
        
        Write-Host "✅ ngrok started as background process (PID: $($ngrokProcess.Id))"
        
        # Wait for ngrok to fully start
        Write-Host "⏳ Getting tunnel URL..."
        Start-Sleep -Seconds 5
        
        # Get the public ngrok URL
        $tunnelData = Invoke-RestMethod http://127.0.0.1:4040/api/tunnels -ErrorAction Stop
        if ($tunnelData.tunnels.Count -eq 0) {
            throw "No tunnels found"
        }
        
        $tunnelUrl = $tunnelData.tunnels[0].public_url
        Write-Host "🌐 Tunnel URL: $tunnelUrl"
        
    } catch {
        Write-Warning "Failed to start ngrok: $($_.Exception.Message)"
        Write-Host "💡 Make sure ngrok is authenticated: ngrok config add-authtoken YOUR_TOKEN"
        Write-Host "📖 Get your token: https://dashboard.ngrok.com/get-started/your-authtoken"
        $tunnelUrl = "http://localhost:5678"
        Write-Host "Will use local URL: $tunnelUrl"
    }
}

# Build and link the custom node
Write-Host "📦 Building custom node..."
npm run build | Out-Null
npm link | Out-Null

# Set up n8n custom directory (cross-platform)
if ($IsWindowsPlatform) {
    $customPath = Join-Path $env:USERPROFILE ".n8n" "custom"
} else {
    $customPath = Join-Path $env:HOME ".n8n" "custom"
}

if (-not (Test-Path $customPath)) {
    New-Item -ItemType Directory -Path $customPath -Force | Out-Null
}

# Link the custom node package in n8n custom directory
Write-Host "🔗 Linking custom node in n8n directory..."
$currentLocation = Get-Location
Set-Location $customPath
npm link n8n-nodes-appstore 2>$null | Out-Null
Set-Location $currentLocation

# Copy .env file to n8n custom directory if it exists
$envFile = Join-Path $PSScriptRoot ".env"
$envDestination = Join-Path $customPath ".env"

if (Test-Path $envFile) {
    Copy-Item $envFile $envDestination -Force
    Write-Host "✅ Copied .env file to n8n custom directory"
} else {
    Write-Host "⚠️  .env file not found in project directory"
}

# Set env var in current session
$env:WEBHOOK_TUNNEL_URL = $tunnelUrl

# Function to cleanup ngrok process
function Cleanup {
    Write-Host ""
    Write-Host "🧹 Cleaning up ngrok process..."
    if ($global:ngrokProcess) {
        try {
            Stop-Process -Id $global:ngrokProcess.Id -Force -ErrorAction SilentlyContinue
            Start-Sleep -Seconds 1
        } catch { }
    }
    # Kill any remaining ngrok processes
    if ($IsWindowsPlatform) {
        cmd /c "taskkill /F /IM ngrok.exe 2>nul"
    } else {
        bash -c "pkill -f 'ngrok http 5678'" 2>/dev/null
    }
}

# Set up signal handlers for proper cleanup
if ($ngrokProcess) {
    $global:ngrokProcess = $ngrokProcess
    
    # Handle Ctrl+C and other termination signals
    [Console]::TreatControlCAsInput = $false
    $null = Register-EngineEvent PowerShell.Exiting -Action { Cleanup }
    
    # Also handle script termination
    trap { Cleanup; break }
}

# Kill any orphaned ngrok processes before starting
if ($IsWindowsPlatform) {
    cmd /c "taskkill /F /IM ngrok.exe 2>nul" | Out-Null
} else {
    bash -c "pkill -f 'ngrok http 5678'" 2>/dev/null | Out-Null
}

Write-Host "🎯 Starting n8n..."
Write-Host "📱 Access n8n at: http://localhost:5678"
if ($tunnelUrl -ne "http://localhost:5678") {
    Write-Host "🌐 Public tunnel at: $tunnelUrl"
}
Write-Host "🎪 Your AppStore Connect node should be available in the node palette!"
Write-Host ""
Write-Host "Press Ctrl+C to stop both n8n and ngrok"

# Start n8n in SAME terminal (so it inherits env var)
try {
    cd $customPath
    n8n
} finally {
    # Ensure cleanup happens even if n8n fails
    Cleanup
}