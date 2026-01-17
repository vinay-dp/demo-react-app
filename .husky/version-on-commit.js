const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Check if ui-library files were changed
const stagedFiles = execSync('git diff --cached --name-only', { encoding: 'utf-8' });
const uiLibraryChanged = stagedFiles.split('\n').some(file => file.startsWith('ui-library/'));

if (!uiLibraryChanged) {
    // No ui-library files changed, exit silently
    process.exit(0);
}

console.log('');
console.log('📦 UI Library files changed detected!');
console.log('');

// Read current version
const packagePath = path.join(__dirname, '../ui-library/package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const currentVersion = packageJson.version;

console.log(`Current version: ${currentVersion}`);
console.log('');
console.log('Select version update type:');
console.log('  1) Major (breaking changes) - e.g., 1.0.0 → 2.0.0');
console.log('  2) Minor (new features) - e.g., 1.0.0 → 1.1.0');
console.log('  3) Patch (bug fixes) - e.g., 1.0.0 → 1.0.1');
console.log('  4) Skip version update');
console.log('');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter choice (1-4): ', (answer) => {
    rl.close();

    let versionType;
    const choice = answer.trim();

    switch (choice) {
        case '1':
            versionType = 'major';
            break;
        case '2':
            versionType = 'minor';
            break;
        case '3':
            versionType = 'patch';
            break;
        case '4':
            console.log('⏭️  Skipping version update');
            console.log('');
            process.exit(0);
            return;
        default:
            console.log(`❌ Invalid choice: "${choice}"`);
            console.log('⏭️  Skipping version update');
            console.log('');
            process.exit(0);
            return;
    }

    try {
        console.log('');
        console.log(`🔄 Updating version (${versionType})...`);

        // Update version in ui-library
        execSync(`cd ui-library && npm version ${versionType} --no-git-tag-version`, {
            stdio: 'pipe'
        });

        // Read new version
        const updatedPackageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        const newVersion = updatedPackageJson.version;

        console.log(`✅ Version updated: ${currentVersion} → ${newVersion}`);
        console.log('');

        // Stage the version changes
        console.log('📝 Staging version files...');
        execSync('git add ui-library/package.json ui-library/package-lock.json', {
            stdio: 'pipe'
        });

        console.log('✅ Version files staged for commit');
        console.log('');

        process.exit(0);
    } catch (error) {
        console.error('');
        console.error('❌ Error updating version:', error.message);
        console.error('⏭️  Continuing without version update');
        console.error('');
        process.exit(0); // Don't block the commit
    }
});
