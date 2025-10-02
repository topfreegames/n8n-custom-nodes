# Cross-platform Makefile for n8n AppStore Connect node

# Default target - detect OS and run appropriate script
run:
ifeq ($(OS),Windows_NT)
	@echo "🪟 Detected Windows - using PowerShell script"
	powershell -ExecutionPolicy Bypass -File ./run-n8n.ps1
else
	@echo "🐧 Detected Unix/Linux/macOS - using bash script"
	./run-n8n.sh
endif

# Explicit Windows target
run-windows:
	@echo "🪟 Running Windows version"
	powershell -ExecutionPolicy Bypass -File ./run-n8n.ps1

# Explicit Unix/Linux/macOS target  
run-unix:
	@echo "🐧 Running Unix/Linux/macOS version"
	./run-n8n.sh

# Build only
build:
	npm run build

# Link only (after build)
link: build
	npm link

# Clean build artifacts
clean:
	npm run build -- --clean
	rm -rf dist/

# Help target
help:
	@echo "Available targets:"
	@echo "  run         - Auto-detect OS and run appropriate script"
	@echo "  run-windows - Force Windows PowerShell script"
	@echo "  run-unix    - Force Unix/Linux/macOS bash script"
	@echo "  build       - Build the node"
	@echo "  link        - Build and link the node"
	@echo "  clean       - Clean build artifacts"
	@echo "  help        - Show this help"

.PHONY: run run-windows run-unix build link clean help