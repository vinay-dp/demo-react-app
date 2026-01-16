# GitHub Setup Guide

Step-by-step instructions for setting up your GitHub repository and configuring CI/CD workflows.

## 📋 Prerequisites

- GitHub account
- Git installed locally
- Project files ready (completed from local development)

## 🔧 Step 1: Create GitHub Repository

1. **Go to GitHub** and sign in to your account

2. **Create a new repository**:
   - Click the **+** icon in the top-right corner
   - Select **New repository**
   - Repository name: `react-component-library-demo`
   - Description: "React component library demo with CI/CD pipelines"
   - Choose **Public** (required for free GitHub Pages)
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)
   - Click **Create repository**

## 📤 Step 2: Push Code to GitHub

1. **Initialize Git repository** (if not already done):
   ```bash
   cd c:\Users\Vinay Panchal\.gemini\antigravity\scratch\react-component-library-demo
   git init
   ```

2. **Add all files**:
   ```bash
   git add .
   ```

3. **Create initial commit**:
   ```bash
   git commit -m "Initial commit: React component library with CI/CD"
   ```

4. **Add remote repository** (replace YOUR_USERNAME):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/react-component-library-demo.git
   ```

5. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## 🌐 Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub

2. **Navigate to Settings**:
   - Click the **Settings** tab
   - Scroll down to **Pages** in the left sidebar

3. **Configure GitHub Pages**:
   - Source: **GitHub Actions**
   - Click **Save**

4. **Wait for deployment**:
   - Go to the **Actions** tab
   - You should see the "Deploy Demo App to GitHub Pages" workflow running
   - Wait for it to complete (green checkmark)

5. **Access your deployed app**:
   - Go back to **Settings** → **Pages**
   - You'll see the URL: `https://YOUR_USERNAME.github.io/react-component-library-demo/`
   - Click the link to view your live demo app!

## ✅ Step 4: Verify Workflows

### Check UI Library CI Workflow

1. Go to **Actions** tab
2. You should see "UI Library CI" workflow
3. It should have run automatically on your initial push
4. Click on it to see the build logs

### Check Demo App Deploy Workflow

1. In **Actions** tab, find "Deploy Demo App to GitHub Pages"
2. This should also have run automatically
3. Verify it completed successfully
4. The demo app should now be live!

## 🔐 Step 5: Configure npm Publishing (Optional)

> **Note**: Only follow this step if you want to publish your library to npm.

### Create npm Account and Token

1. **Sign up for npm** at https://www.npmjs.com/ (if you don't have an account)

2. **Generate an Access Token**:
   - Log in to npm
   - Click your profile picture → **Access Tokens**
   - Click **Generate New Token** → **Classic Token**
   - Select **Automation** type
   - Copy the token (you won't see it again!)

### Add npm Token to GitHub Secrets

1. **Go to your GitHub repository**

2. **Navigate to Settings** → **Secrets and variables** → **Actions**

3. **Add new secret**:
   - Click **New repository secret**
   - Name: `NPM_TOKEN`
   - Value: Paste your npm token
   - Click **Add secret**

### Update package.json

Before publishing, update the repository URL in `ui-library/package.json`:

```json
"repository": {
  "type": "git",
  "url": "https://github.com/YOUR_USERNAME/react-component-library-demo.git",
  "directory": "ui-library"
}
```

### Publish to npm

**Option A: Manual Trigger**
1. Go to **Actions** tab
2. Select "Publish UI Library to npm"
3. Click **Run workflow**
4. Enter version number (e.g., `1.0.1`)
5. Click **Run workflow**

**Option B: Using Git Tags**
```bash
git tag v1.0.1
git push origin v1.0.1
```

## 🎯 Step 6: Update Base Path (Important!)

The demo app deployment uses a base path. You need to update it to match your repository name:

1. **Edit** `demo-app/vite.config.ts`:
   ```typescript
   base: process.env.GITHUB_ACTIONS ? '/react-component-library-demo/' : '/',
   ```

2. **If your repository name is different**, change `/react-component-library-demo/` to match your repo name

3. **Commit and push**:
   ```bash
   git add demo-app/vite.config.ts
   git commit -m "Update base path for GitHub Pages"
   git push
   ```

## 🔄 Workflow Triggers

### UI Library CI
- **Triggers on**: Push or PR to `main`/`develop` branches when `ui-library/**` files change
- **Purpose**: Validate library builds correctly

### Demo App Deploy
- **Triggers on**: Push to `main` when `demo-app/**` or `ui-library/**` files change
- **Purpose**: Deploy demo app to GitHub Pages
- **Manual trigger**: Go to Actions → "Deploy Demo App to GitHub Pages" → "Run workflow"

### Publish to npm
- **Triggers on**: Manual workflow dispatch or version tags (`v*.*.*`)
- **Purpose**: Publish library to npm registry

## 🐛 Troubleshooting

### Workflow fails with "Permission denied"
- Go to **Settings** → **Actions** → **General**
- Under "Workflow permissions", select **Read and write permissions**
- Click **Save**

### GitHub Pages shows 404
- Verify the base path in `demo-app/vite.config.ts` matches your repository name
- Check that the workflow completed successfully
- Wait a few minutes for GitHub Pages to update

### npm publish fails
- Verify `NPM_TOKEN` secret is set correctly
- Check that the package name in `ui-library/package.json` is unique on npm
- Ensure you're not trying to publish the same version twice

## 📊 Monitoring

### View Workflow Runs
- Go to **Actions** tab to see all workflow runs
- Click on any run to see detailed logs
- Green checkmark = success, Red X = failure

### View Deployments
- Go to **Deployments** (right sidebar on main repo page)
- See all GitHub Pages deployments
- Click to view deployment details

## 🎉 Success!

Your project is now set up with:
- ✅ GitHub repository
- ✅ Automated CI for ui-library
- ✅ Automated deployment to GitHub Pages
- ✅ Optional npm publishing workflow

**Next Steps**:
- Share your demo app URL with others
- Make changes and watch the workflows run automatically
- Publish your library to npm (optional)

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
