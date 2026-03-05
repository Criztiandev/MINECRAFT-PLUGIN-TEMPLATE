const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve(__dirname, '../package.json');
const pomXmlPath = path.resolve(__dirname, '../pom.xml');

// 1. Read and bump package.json version
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const versionParts = packageJson.version.split('.');
const patch = parseInt(versionParts[2], 10) + 1;
const newVersion = `${versionParts[0]}.${versionParts[1]}.${patch}`;

packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
console.log(`[Bump] Updated package.json version to v${newVersion}`);

// 2. Read and bump pom.xml version
let pomXml = fs.readFileSync(pomXmlPath, 'utf8');

// Replace the first <version>x.x.x(-SNAPSHOT)</version> which is the main artifact version
pomXml = pomXml.replace(
  /<version>([\d\.]+)(-SNAPSHOT)?<\/version>/,
  `<version>${newVersion}$2</version>`
);

fs.writeFileSync(pomXmlPath, pomXml);
console.log(`[Bump] Updated pom.xml version`);
