# Testing Git Hooks

This guide will help you test the pre-push Git hooks to see ESLint and versioning in action.

## How to Test the Hooks

The pre-push hooks run **automatically** when you push to any branch except main. Here's how to test them:

### Test 1: Make a Small Change

```bash
# 1. Make a small change to any file
echo "// test comment" >> ui-library/src/index.ts

# 2. Commit the change
git add .
git commit -m "test: trigger pre-push hooks"

# 3. Try to push
git push
```

**What You'll See**:

```
🔍 Running pre-push checks for branch: dev

📝 Running ESLint...
✅ ESLint passed

📦 Current version: 1.0.0

Select version update type:
  1) Major (breaking changes) - e.g., 1.0.0 → 2.0.0
  2) Minor (new features) - e.g., 1.0.0 → 1.1.0
  3) Patch (bug fixes) - e.g., 1.0.0 → 1.0.1
  4) Skip version update

Enter choice (1-4): _
```

You'll be prompted to enter a number (1-4) to select the version type!

---

## Why Hooks Didn't Show Before

The hooks **are installed** but didn't show during my automated pushes because:

1. **Automated pushes** - When I push via automation, the interactive prompts can't display
2. **Git configuration** - The hooks path needed to be corrected
3. **Windows compatibility** - Bash scripts need Git Bash to run

---

## Verifying Hooks Are Installed

Run these commands to verify:

```bash
# Check hooks path
git config core.hooksPath
# Should show: .husky

# Check pre-push hook exists
ls .husky/pre-push
# Should show the file

# Check hook is executable (Git Bash)
bash .husky/pre-push
# Should show error about branch detection (that's OK)
```

---

## Testing ESLint Failure

To see the hook **block** a push with ESLint errors:

```bash
# 1. Add a linting error
echo "const unused = 'test';" >> ui-library/src/index.ts

# 2. Commit
git add .
git commit -m "test: add lint error"

# 3. Try to push
git push
```

**What You'll See**:

```
🔍 Running pre-push checks for branch: dev

📝 Running ESLint...

/path/to/index.ts
  12:7  error  'unused' is assigned but never used  @typescript-eslint/no-unused-vars

❌ ESLint errors found! Please fix them before pushing.
   Run 'cd ui-library && npm run lint' to see errors

error: failed to push some refs
```

The push will be **blocked** until you fix the error!

---

## Testing Main Branch Protection

To see the hook **block** pushes to main:

```bash
# 1. Switch to main
git checkout main

# 2. Try to push
git push
```

**What You'll See**:

```
❌ Direct pushes to 'main' branch are not allowed!

Please use the Pull Request workflow:
  1. Create a feature/dev branch
  2. Make your changes and commit
  3. Push to your branch
  4. Create a Pull Request to merge into main
```

---

## Next Time You Push

The **next time you manually push** to the dev branch, you'll see:

1. ✅ ESLint validation running
2. 📦 Version prompt asking for major/minor/patch
3. ✅ Automatic version commit
4. ✅ Push proceeds with version included

---

## Bypassing Hooks (Emergency Only)

If you need to skip the hooks:

```bash
git push --no-verify
```

⚠️ **Warning**: This bypasses ALL checks including ESLint and main branch protection!

---

## Summary

- ✅ Hooks are installed and configured
- ✅ They run on **your manual pushes**
- ✅ They're **interactive** (prompt for input)
- ✅ They **block** on errors
- ✅ Test them by making a small change and pushing

**Try it now**: Make a small change, commit, and push to see the hooks in action! 🚀
