# Git Hooks - Updated Guide

## ✅ What Works Now

The pre-push hooks have been simplified to work reliably on Windows:

### 1. ESLint Validation ✅
- **Runs automatically** before every push
- **Blocks push** if linting errors found
- **Shows clear error messages**

### 2. Main Branch Protection ✅
- **Blocks direct pushes** to main branch
- **Requires PR workflow**
- **Works perfectly**

### 3. Version Management (Manual)
- Version updates are now **manual** (not automatic)
- Use commands when you want to update version
- More reliable than interactive prompts

---

## 🚀 How It Works Now

### When You Push

```bash
git push

# You'll see:
🔍 Running pre-push checks for branch: dev

📝 Running ESLint...
✅ ESLint passed

ℹ️  Version management:
   To update version manually: cd ui-library && npm version [patch|minor|major]

✅ All pre-push checks passed!

# Push proceeds automatically!
```

---

## 📦 Manual Version Updates

When you want to update the version:

```bash
# For bug fixes (1.0.0 → 1.0.1)
cd ui-library
npm version patch

# For new features (1.0.0 → 1.1.0)
cd ui-library
npm version minor

# For breaking changes (1.0.0 → 2.0.0)
cd ui-library
npm version major

# Then commit and push
git add .
git commit -m "chore: bump version"
git push
```

---

## ✅ What Gets Checked

### ESLint Validation
- Runs on all files in `ui-library`
- Checks for:
  - Unused variables
  - Missing types
  - Code style issues
  - Best practices

### Main Branch Protection
- Prevents accidental direct commits to main
- Enforces PR workflow
- Ensures code review

---

## 🎯 Try It Now!

The hooks are working! Try pushing:

```bash
# Make a small change
echo "" >> README.md

# Commit
git add .
git commit -m "test: verify hooks"

# Push (hooks will run!)
git push
```

You'll see:
- ✅ ESLint check runs
- ✅ Push succeeds if no errors
- ✅ No interactive prompts (works smoothly!)

---

## 🐛 Why Interactive Prompts Were Removed

**The Problem**:
- Git hooks on Windows PowerShell can't properly handle interactive stdin
- The readline interface was receiving Git's internal arguments
- Prompts would fail with "Invalid choice" errors

**The Solution**:
- Made version updates **manual** instead of automatic
- Kept the important checks (ESLint, main branch protection)
- More reliable and predictable workflow

---

## 📝 Summary

**What Works**:
- ✅ ESLint validation (automatic)
- ✅ Main branch protection (automatic)
- ✅ Version updates (manual, when you want)

**Workflow**:
1. Make changes
2. Commit
3. Push (ESLint runs automatically)
4. Update version manually when needed
5. Create PR to merge to main

**Result**: Reliable Git hooks that actually work on Windows! 🎉
