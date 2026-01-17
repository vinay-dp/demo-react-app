# Installing from GitHub Packages

This guide explains how to install and use the `@vinay-dp/ui-library` package from GitHub Packages.

## 📦 Installation

### Step 1: Configure npm

Create or update `.npmrc` in your project root:

```
@vinay-dp:registry=https://npm.pkg.github.com
```

### Step 2: Authenticate (One-time setup)

You need a GitHub Personal Access Token with `read:packages` permission.

#### Option A: Using GitHub CLI (Recommended)
```bash
gh auth login
```

#### Option B: Manual Token Setup

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `read:packages`
4. Copy the token

Add to `.npmrc`:
```
//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE
```

### Step 3: Install Package

```bash
npm install @vinay-dp/ui-library
```

---

## 🚀 Usage

### Import Components

```tsx
import { 
  Button, 
  Icon, 
  Input, 
  Dropdown, 
  RadioButton, 
  Checkbox, 
  TextField 
} from '@vinay-dp/ui-library';

// Import styles
import '@vinay-dp/ui-library/dist/ui-library.css';
```

### Example

```tsx
import { useState } from 'react';
import { TextField, Button, Checkbox } from '@vinay-dp/ui-library';
import '@vinay-dp/ui-library/dist/ui-library.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <div>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      
      <Checkbox
        checked={remember}
        onChange={(e) => setRemember(e.target.checked)}
        label="Remember me"
      />
      
      <Button onClick={() => console.log('Login')}>
        Login
      </Button>
    </div>
  );
}
```

---

## 📚 Available Components

### Button
```tsx
<Button variant="primary" onClick={handleClick}>
  Click me
</Button>
```

### TextField
```tsx
<TextField
  label="Email"
  type="email"
  error="Invalid email"
  helperText="Enter your email address"
  required
/>
```

### Checkbox
```tsx
<Checkbox
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  label="I agree to terms"
/>
```

### RadioButton
```tsx
<RadioButton
  name="gender"
  value="male"
  checked={gender === 'male'}
  onChange={(e) => setGender(e.target.value)}
  label="Male"
/>
```

### Input
```tsx
<Input
  type="text"
  placeholder="Enter name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### Dropdown
```tsx
<Dropdown
  options={['Option 1', 'Option 2', 'Option 3']}
  value={selected}
  onChange={(e) => setSelected(e.target.value)}
/>
```

### Icon
```tsx
<Icon name="user" size={24} />
```

---

## 🔄 Updating

To update to the latest version:

```bash
npm update @vinay-dp/ui-library
```

To install a specific version:

```bash
npm install @vinay-dp/ui-library@1.3.0
```

---

## 📖 Documentation

- **Live Demo**: https://vinay-dp.github.io/demo-react-app/
- **Repository**: https://github.com/vinay-dp/demo-react-app
- **Changelog**: [CHANGELOG.md](https://github.com/vinay-dp/demo-react-app/blob/main/ui-library/CHANGELOG.md)

---

## 🐛 Troubleshooting

### "Unable to authenticate"

Make sure your `.npmrc` is configured correctly:
```
@vinay-dp:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

### "Package not found"

1. Check package name is correct: `@vinay-dp/ui-library`
2. Verify you have access to the repository
3. Ensure your token has `read:packages` permission

### "ENOTFOUND npm.pkg.github.com"

Check your internet connection and GitHub status.

---

## 💡 Tips

### For Team Projects

Add `.npmrc` to your repository (without the token):
```
@vinay-dp:registry=https://npm.pkg.github.com
```

Team members add their own tokens locally or use environment variables:
```
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### For CI/CD

Use `GITHUB_TOKEN` in workflows:
```yaml
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## 📦 Package Information

- **Name**: `@vinay-dp/ui-library`
- **Registry**: GitHub Packages
- **Scope**: `@vinay-dp`
- **License**: MIT
- **Author**: Vinay Panchal

---

## 🎯 Quick Start

```bash
# 1. Configure npm
echo "@vinay-dp:registry=https://npm.pkg.github.com" >> .npmrc

# 2. Authenticate
gh auth login

# 3. Install
npm install @vinay-dp/ui-library

# 4. Use in your code
# See examples above
```

That's it! You're ready to use the component library! 🚀
