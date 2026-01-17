const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Read current version
const packagePath = path.join(__dirname, '../ui-library/package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const currentVersion = packageJson.version;

console.log('');
console.log('📦 Bump UI Library Version');
console.log('═══════════════════════════════');
console.log('');
console.log(`Current version: ${currentVersion}`);
console.log('');
console.log('Select version update type:');
console.log('  1) Major (breaking changes) - e.g., 1.0.0 → 2.0.0');
console.log('  2) Minor (new features) - e.g., 1.0.0 → 1.1.0');
console.log('  3) Patch (bug fixes) - e.g., 1.0.0 → 1.0.1');
console.log('  4) Cancel');
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
            console.log('');
            console.log('❌ Cancelled');
            console.log('');
            process.exit(0);
            return;
        default:
            console.log('');
            console.log(`❌ Invalid choice: "${choice}"`);
            console.log('');
            process.exit(1);
            return;
    }

    try {
        console.log('');
        console.log(`🔄 Updating version (${versionType})...`);

        // Update version in ui-library
        execSync(`cd ui-library && npm version ${versionType} --no-git-tag-version`, {
            stdio: 'inherit'
        });

        // Read new version
        const updatedPackageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        const newVersion = updatedPackageJson.version;

        console.log('');
        console.log(`✅ Version updated: ${currentVersion} → ${newVersion}`);
        console.log('');
        console.log('Next steps:');
        console.log('  1. git add .');
        console.log('  2. git commit -m "chore: bump version to ' + newVersion + '"');
        console.log('  3. git push');
        console.log('');

        process.exit(0);
    } catch (error) {
        console.error('');
        console.error('❌ Error updating version:', error.message);
        console.error('');
        process.exit(1);
    }
});
