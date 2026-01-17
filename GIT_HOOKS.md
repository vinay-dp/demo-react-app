# Pre-Push Git Hooks

This repository uses Git hooks to ensure code quality and proper versioning before pushing changes.

## What Happens Before Push

When you push to any branch **except main**, the following checks run automatically:

### 1. ESLint Validation ✅
- Runs `npm run lint` in the `ui-library` folder
- **Blocks push** if any linting errors are found
- You must fix all errors before pushing

### 2. Version Update 📦
- Prompts you to update the package version
- Options:
  - **Major** (1.0.0 → 2.0.0) - Breaking changes
  - **Minor** (1.0.0 → 1.1.0) - New features
  - **Patch** (1.0.0 → 1.0.1) - Bug fixes
  - **Skip** - No version update
- Automatically commits the version change

## Example Workflow

```bash
# Make your changes
git add .
git commit -m "feat: add new component"

# Push to dev branch
git push

# Pre-push hook runs:
🔍 Running pre-push checks for branch: dev

📝 Running ESLint...
✅ ESLint passed

📦 Current version: 1.0.0

Select version update type:
  1) Major (breaking changes) - e.g., 1.0.0 → 2.0.0
  2) Minor (new features) - e.g., 1.0.0 → 1.1.0
  3) Patch (bug fixes) - e.g., 1.0.0 → 1.0.1
  4) Skip version update

Enter choice (1-4): 2

🔄 Updating version (minor)...
✅ Version updated: 1.0.0 → 1.1.0
📝 Staging version change...
💾 Committing version change...
✅ Version 1.1.0 committed

✅ All pre-push checks passed!
```

## If ESLint Fails

```bash
git push

🔍 Running pre-push checks for branch: dev

📝 Running ESLint...

❌ ESLint errors found! Please fix them before pushing.
   Run 'cd ui-library && npm run lint' to see errors

# Fix the errors
cd ui-library
npm run lint  # See what's wrong
# Fix the issues
cd ..

# Try again
git add .
git commit -m "fix: resolve linting errors"
git push
```

## Skipping Checks (Not Recommended)

If you absolutely need to skip the pre-push checks:

```bash
git push --no-verify
```

⚠️ **Warning**: This bypasses all quality checks and versioning. Use only in emergencies!

## Main Branch

Pushes to the `main` branch **skip all checks** to avoid conflicts during PR merges.

## Troubleshooting

### Hook not running
```bash
# Ensure hooks are configured
git config core.hooksPath .husky
```

### Permission denied (Linux/Mac)
```bash
chmod +x .husky/pre-push
```

### Version prompt not working
Make sure you're in the repository root when pushing.
