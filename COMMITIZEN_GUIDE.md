# Professional Version Management with Commitizen

This project uses **Commitizen** and **Standard Version** for professional commit messages and automatic versioning.

## 🎯 Quick Start

### Making a Commit

Instead of `git commit`, use:

```bash
cd ui-library
npm run commit
```

**You'll see an interactive prompt**:

```
? Select the type of change that you're committing: (Use arrow keys)
❯ feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests

? What is the scope of this change (e.g. component or file name): (press enter to skip)
  Button

? Write a short, imperative tense description of the change:
  add hover animation

? Provide a longer description of the change: (press enter to skip)
  Added smooth hover animation with scale transform

? Are there any breaking changes?
  No

? Does this change affect any open issues?
  No
```

**Result**: Perfect conventional commit message!
```
feat(Button): add hover animation

Added smooth hover animation with scale transform
```

---

## 📦 Releasing a New Version

When ready to release, run:

```bash
cd ui-library
npm run release
```

**Standard Version will**:
1. ✅ Analyze all commits since last release
2. ✅ Determine version bump (major/minor/patch) automatically
3. ✅ Update version in package.json
4. ✅ Generate CHANGELOG.md
5. ✅ Create a git tag
6. ✅ Commit everything

**Manual version control**:
```bash
npm run release:patch  # 1.0.0 → 1.0.1
npm run release:minor  # 1.0.0 → 1.1.0
npm run release:major  # 1.0.0 → 2.0.0
```

---

## 🔄 Complete Workflow

### 1. Make Changes

```bash
# Edit ui-library files
# e.g., ui-library/src/components/Button/Button.tsx
```

### 2. Stage Changes

```bash
git add .
```

### 3. Commit with Commitizen

```bash
cd ui-library
npm run commit
```

Follow the prompts to create a conventional commit.

### 4. Push Changes

```bash
cd ..
git push
```

### 5. Release When Ready

```bash
cd ui-library
npm run release
git push --follow-tags origin dev
```

---

## 📝 Commit Types

| Type | When to Use | Version Bump |
|------|-------------|--------------|
| **feat** | New feature | Minor (1.0.0 → 1.1.0) |
| **fix** | Bug fix | Patch (1.0.0 → 1.0.1) |
| **feat!** | Breaking change | Major (1.0.0 → 2.0.0) |
| **docs** | Documentation | None |
| **style** | Code formatting | None |
| **refactor** | Code restructure | None |
| **perf** | Performance | Patch |
| **test** | Tests | None |
| **chore** | Maintenance | None |

---

## 🎓 Examples

### Adding a New Component

```bash
git add .
cd ui-library
npm run commit

# Prompts:
Type: feat
Scope: Checkbox
Description: add Checkbox component
Breaking: No

# Result: feat(Checkbox): add Checkbox component
```

### Fixing a Bug

```bash
git add .
cd ui-library
npm run commit

# Prompts:
Type: fix
Scope: Button
Description: correct hover state color
Breaking: No

# Result: fix(Button): correct hover state color
```

### Breaking Change

```bash
git add .
cd ui-library
npm run commit

# Prompts:
Type: feat
Scope: Button
Description: redesign API
Breaking: Yes
Breaking description: Changed onClick to onPress

# Result: feat(Button)!: redesign API
# BREAKING CHANGE: Changed onClick to onPress
```

---

## 🚀 Benefits

### Automatic Versioning
- ✅ **No manual version bumps** - Standard Version does it
- ✅ **Semantic versioning** - Follows semver automatically
- ✅ **Changelog generation** - Auto-generated from commits

### Professional Commits
- ✅ **Consistent format** - All commits follow convention
- ✅ **Better history** - Easy to understand changes
- ✅ **Azure DevOps compatible** - Works with pipelines

### Team Collaboration
- ✅ **Clear communication** - Everyone uses same format
- ✅ **Automated releases** - No manual steps
- ✅ **Git tags** - Proper version tagging

---

## 🔗 Integration with Azure DevOps

This setup works perfectly with Azure DevOps pipelines:

```yaml
# azure-pipelines.yml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '18.x'

- script: |
    cd ui-library
    npm ci
    npm run lint
    npm run build
  displayName: 'Build and Test'

- script: |
    cd ui-library
    npm run release
    git push --follow-tags
  displayName: 'Release'
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
```

---

## 📊 Summary

**Instead of**:
```bash
git commit -m "added stuff"
```

**Use**:
```bash
cd ui-library
npm run commit
# Interactive prompts
# Perfect conventional commit!
```

**For releases**:
```bash
cd ui-library
npm run release
# Automatic version bump
# Changelog generated
# Git tag created
```

**Result**: Professional, automated version management! 🎉
