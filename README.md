# React Component Library Demo

A demonstration project showcasing how to create a React component library and consume it in a demo application, with automated CI/CD pipelines using GitHub Actions.

## 📁 Project Structure

```
react-component-library-demo/
├── ui-library/          # Reusable React component library
│   ├── src/
│   │   ├── Button.tsx   # Button component
│   │   ├── Icon.tsx     # Icon component
│   │   ├── Input.tsx    # Input component
│   │   ├── Dropdown.tsx # Dropdown component
│   │   └── index.ts     # Main entry point
│   ├── dist/            # Built library (generated)
│   └── package.json
│
├── demo-app/            # Demo application consuming the library
│   ├── src/
│   │   └── App.tsx      # Demo showcasing all components
│   └── package.json
│
└── .github/
    └── workflows/       # GitHub Actions CI/CD pipelines
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or 20.x
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-component-library-demo.git
   cd react-component-library-demo
   ```

2. **Build the UI Library**
   ```bash
   cd ui-library
   npm install
   npm run build
   cd ..
   ```

3. **Run the Demo App**
   ```bash
   cd demo-app
   npm install
   npm install ../ui-library
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5173`

## 🏗️ Building

### Build UI Library
```bash
cd ui-library
npm run build
```

This generates:
- `dist/ui-library.es.js` - ES module build
- `dist/ui-library.umd.js` - UMD build
- `dist/ui-library.css` - Component styles
- `dist/index.d.ts` - TypeScript declarations

### Build Demo App
```bash
cd demo-app
npm run build
```

## 🔄 GitHub Actions Workflows

### 1. **UI Library CI** (`.github/workflows/ui-library-ci.yml`)
- **Triggers**: Push/PR to `main` or `develop` branches (when ui-library files change)
- **Actions**:
  - Runs on Node.js 18.x and 20.x
  - Installs dependencies
  - Runs linter
  - Builds the library
  - Validates build artifacts
  - Uploads build artifacts

### 2. **Demo App Deploy** (`.github/workflows/demo-app-deploy.yml`)
- **Triggers**: Push to `main` branch (when demo-app or ui-library files change)
- **Actions**:
  - Builds ui-library
  - Builds demo-app
  - Deploys to GitHub Pages
- **Live Demo**: `https://YOUR_USERNAME.github.io/react-component-library-demo/`

### 3. **Publish to npm** (`.github/workflows/publish-library.yml`) - Optional
- **Triggers**: Manual workflow dispatch or version tags (`v*.*.*`)
- **Actions**:
  - Builds and tests library
  - Publishes to npm registry
  - Creates GitHub release
- **Requirements**: NPM_TOKEN secret configured

## 📦 Components

### Button
```tsx
import { Button } from 'ui-library';

<Button onClick={() => alert('Clicked!')} variant="primary">
  Click Me
</Button>
```

### Icon
```tsx
import { Icon } from 'ui-library';

<Icon name="home" size={24} />
```

### Input
```tsx
import { Input } from 'ui-library';

<Input 
  placeholder="Enter text" 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>
```

### Dropdown
```tsx
import { Dropdown } from 'ui-library';

<Dropdown 
  options={['Option 1', 'Option 2']} 
  value={selected}
  onChange={(e) => setSelected(e.target.value)}
/>
```

## 🌐 Deployment

The demo app is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Live URL**: `https://YOUR_USERNAME.github.io/react-component-library-demo/`

## 📝 License

MIT

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Additional Documentation

- [GitHub Setup Guide](./GITHUB_SETUP.md) - Step-by-step instructions for setting up GitHub repository and workflows
