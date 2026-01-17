# Version Management - Simple & Reliable

## ✅ How to Update Version

Run this command **before committing** ui-library changes:

```bash
cd ui-library
npm run bump
```

**You'll see**:
```
📦 Bump UI Library Version
═══════════════════════════════

Current version: 1.0.0

Select version update type:
  1) Major (breaking changes) - e.g., 1.0.0 → 2.0.0
  2) Minor (new features) - e.g., 1.0.0 → 1.1.0
  3) Patch (bug fixes) - e.g., 1.0.0 → 1.0.1
  4) Cancel

Enter choice (1-4): _
```

**Type your choice** and press Enter - it works perfectly!

---

## 🚀 Complete Workflow

### When Making UI Library Changes

```bash
# 1. Make your changes
# Edit ui-library/src/components/...

# 2. Bump version (interactive prompt)
cd ui-library
npm run bump
# → Select 1, 2, or 3
# → Version updates automatically

# 3. Commit everything (including version)
cd ..
git add .
git commit -m "feat: add new component"

# 4. Push (ESLint check runs)
git push
```

---

## 📝 Examples

### Adding a New Component (Minor)

```bash
# Create new Checkbox component
# ui-library/src/components/Checkbox/...

cd ui-library
npm run bump
# Enter: 2 (Minor)
# Version: 1.0.0 → 1.1.0

cd ..
git add .
git commit -m "feat: add Checkbox component"
git push
```

### Fixing a Bug (Patch)

```bash
# Fix button hover issue
# ui-library/src/components/Button/Button.css

cd ui-library
npm run bump
# Enter: 3 (Patch)
# Version: 1.1.0 → 1.1.1

cd ..
git add .
git commit -m "fix: button hover state"
git push
```

### Breaking Change (Major)

```bash
# Change Button API
# ui-library/src/components/Button/Button.tsx

cd ui-library
npm run bump
# Enter: 1 (Major)
# Version: 1.1.1 → 2.0.0

cd ..
git add .
git commit -m "feat!: redesign Button API"
git push
```

---

## 🎯 Why This Approach?

**Problems with Git Hook Prompts**:
- ❌ Don't work reliably on Windows
- ❌ PowerShell/Git Bash compatibility issues
- ❌ stdin/tty problems in hooks

**Benefits of npm run bump**:
- ✅ **Works perfectly** - runs in normal terminal
- ✅ **Interactive** - readline works properly
- ✅ **Simple** - just one command
- ✅ **Reliable** - no Git hook issues
- ✅ **Clear** - you control when to bump

---

## 📊 Summary

**Version Update**:
```bash
cd ui-library
npm run bump
```

**Full Workflow**:
```bash
# Edit → Bump → Commit → Push
cd ui-library
npm run bump
cd ..
git add .
git commit -m "message"
git push
```

**Result**: Simple, reliable versioning that actually works! 🎉
