# n8n Custom Nodes

This repository contains custom n8n community nodes. Each node is published as a separate npm package and can be installed independently.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Available Nodes

### 📱 App Store Connect
**Package:** `@topfreegames/n8n-nodes-appstore`

Comprehensive integration with Apple App Store Connect API for managing apps, users, certificates, devices, and provisioning profiles.

[📖 Documentation](./packages/n8n-nodes-appstore/README.md) | [📦 npm](https://www.npmjs.com/package/@topfreegames/n8n-nodes-appstore)

**Installation:**
```bash
npm install @topfreegames/n8n-nodes-appstore
```

## Development

This is a monorepo using npm workspaces. Each package can be developed and published independently.

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/topfreegames/n8n-custom-nodes.git
cd n8n-custom-nodes
```

2. Install dependencies:
```bash
npm install
```

3. Build all packages:
```bash
npm run build
```

4. Lint all packages:
```bash
npm run lint
```

### Working with Individual Packages

To work on a specific package:

```bash
cd packages/n8n-nodes-appstore
npm run dev        # Watch mode for development
npm run build      # Build the package
npm run lint       # Lint the package
npm publish        # Publish to npm
```

### Adding New Nodes

1. Create a new package directory under `packages/`
2. Follow the [n8n community node development guide](https://docs.n8n.io/integrations/creating-nodes/)
3. Ensure your package.json follows the naming convention: `@topfreegames/n8n-nodes-{service}`

## Contributing

We welcome contributions! Please read our contributing guidelines and ensure all tests pass before submitting a pull request.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

For issues and questions:
- 🐛 [Report bugs](https://github.com/topfreegames/n8n-custom-nodes/issues)
- 💬 [Discussions](https://github.com/topfreegames/n8n-custom-nodes/discussions)