# Git Hooks - Version Prompts on Commit

## ✅ How It Works Now

Version prompts appear **when you commit** changes to ui-library files.

---

## 🔄 Workflow

### When You Commit UI Library Changes

```bash
# 1. Make changes to ui-library
# Edit files in ui-library/src/...

# 2. Stage your changes
git add .

# 3. Commit (version prompt appears!)
git commit -m "feat: add new component"
```

**You'll see**:

```
📦 UI Library files changed detected!

Current version: 1.0.0

Select version update type:
  1) Major (breaking changes) - e.g., 1.0.0 → 2.0.0
  2) Minor (new features) - e.g., 1.0.0 → 1.1.0
  3) Patch (bug fixes) - e.g., 1.0.0 → 1.0.1
  4) Skip version update

Enter choice (1-4): _
```

**Type your choice** (1, 2, 3, or 4) and press Enter!

**Then**:

```
🔄 Updating version (minor)...
✅ Version updated: 1.0.0 → 1.1.0
📝 Version files staged for commit

[dev abc1234] feat: add new component
 3 files changed, 50 insertions(+)
```

The version update is **included in the same commit**!

---

## 📝 When Prompts Appear

### ✅ Prompts Appear When:
- You commit changes to **ui-library/** files
- Component files (.tsx, .css)
- Library configuration (package.json, tsconfig.json)
- Any file in ui-library folder

### ⏭️ Prompts Skip When:
- You commit changes to **demo-app/** only
- Documentation files only (README.md, etc.)
- Git configuration files
- No ui-library files changed

---

## 🎯 Example Scenarios

### Scenario 1: Adding a New Component

```bash
# Create new component
# Edit ui-library/src/components/Switch/Switch.tsx

git add .
git commit -m "feat: add Switch component"

# Prompt appears:
# Enter choice (1-4): 2  ← You type "2" for minor

# Result: Version 1.0.0 → 1.1.0
```

### Scenario 2: Fixing a Bug

```bash
# Fix bug in Button component
# Edit ui-library/src/components/Button/Button.tsx

git add .
git commit -m "fix: button hover state"

# Prompt appears:
# Enter choice (1-4): 3  ← You type "3" for patch

# Result: Version 1.0.0 → 1.0.1
```

### Scenario 3: Only Demo App Changes

```bash
# Edit demo-app/src/App.tsx only

git add .
git commit -m "docs: update demo"

# No prompt! (demo-app changes don't affect library version)
```

### Scenario 4: Skip Version Update

```bash
# Minor style change
# Edit ui-library/src/components/Button/Button.css

git add .
git commit -m "style: adjust button padding"

# Prompt appears:
# Enter choice (1-4): 4  ← You type "4" to skip

# No version change
```

---

## 🚀 Complete Workflow Example

```bash
# 1. Create feature branch
git checkout -b feature/new-component

# 2. Add new component to ui-library
# ... create files ...

# 3. Stage changes
git add .

# 4. Commit (version prompt appears!)
git commit -m "feat: add RadioButton component"
# → Prompted for version
# → You select "2" (minor)
# → Version updates to 1.1.0
# → Commit includes version change

# 5. Push (ESLint check runs)
git push -u origin feature/new-component
# → ESLint validates
# → Push succeeds

# 6. Create PR on GitHub
# feature/new-component → dev → main
```

---

## 🎓 Benefits

### Why on Commit (Not Push)?
- ✅ **More reliable** - Commit hooks work better with interactive prompts
- ✅ **Immediate feedback** - Version updated right away
- ✅ **Single commit** - Version change included in your commit
- ✅ **Works on Windows** - No stdin issues

### Why Only for UI Library?
- ✅ **Semantic versioning** - Only library changes need versions
- ✅ **No noise** - Demo app changes don't trigger prompts
- ✅ **Focused** - Only prompts when it matters

---

## 📊 Summary

**Hooks Active**:
1. **prepare-commit-msg** - Version prompt when committing ui-library changes
2. **pre-push** - ESLint validation before push
3. **pre-push** - Main branch protection

**Workflow**:
1. Edit ui-library files
2. `git add .`
3. `git commit -m "message"` ← **Version prompt appears here!**
4. Select version type (1-4)
5. `git push` ← ESLint check runs here
6. Create PR

**Result**: Automatic versioning with every ui-library commit! 🎉
