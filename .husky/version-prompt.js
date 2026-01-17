const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read current version
const packagePath = path.join(__dirname, '../ui-library/package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const currentVersion = packageJson.version;

console.log(`📦 Current version: ${currentVersion}`);
console.log('');
console.log('Select version update type:');
console.log('  1) Major (breaking changes) - e.g., 1.0.0 → 2.0.0');
console.log('  2) Minor (new features) - e.g., 1.0.0 → 1.1.0');
console.log('  3) Patch (bug fixes) - e.g., 1.0.0 → 1.0.1');
console.log('  4) Skip version update');
console.log('');

// Use synchronous prompt for Git hook compatibility
process.stdout.write('Enter choice (1-4): ');

// Read input synchronously from stdin
const answer = fs.readFileSync(0, 'utf-8').trim();

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
        process.exit(0);
        break;
    default:
        console.log(`❌ Invalid choice: "${choice}"`);
        console.log('Please enter 1, 2, 3, or 4');
        process.exit(1);
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

    // Stage the version change
    console.log('📝 Staging version change...');
    execSync('git add ui-library/package.json ui-library/package-lock.json', {
        stdio: 'pipe'
    });

    // Commit the version change
    console.log('💾 Committing version change...');
    execSync(`git commit -m "chore: bump version to ${newVersion}"`, {
        stdio: 'pipe'
    });

    console.log(`✅ Version ${newVersion} committed`);

    process.exit(0);
} catch (error) {
    console.error('');
    console.error('❌ Error updating version:', error.message);
    process.exit(1);
}
