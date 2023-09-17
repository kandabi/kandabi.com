'use strict';

const fs = require('fs');
const path = require('path');

const commonDir = path.join(__dirname, './src/common');
const apiDir = path.join(__dirname, './src/api');
const destDir = path.join(__dirname, '../frontend/src/generated-types');

const ensureDirectoryExists = directory => {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
};

const copyTsFiles = (srcDir, destDir) => {
    const files = fs.readdirSync(srcDir);

    for (const file of files) {
        const srcPath = path.join(srcDir, file);
        const destPath = path.join(destDir, path.basename(file));

        if (fs.statSync(srcPath).isDirectory()) {
            copyTsFiles(srcPath, destDir);
        } else if (path.extname(file) === '.ts') {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${file} to ${destPath}`);
        }
    }
};

ensureDirectoryExists(destDir);
copyTsFiles(commonDir, destDir);
copyTsFiles(apiDir, destDir);
