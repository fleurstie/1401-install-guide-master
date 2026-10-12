const fs = require('fs');
const path = require('path');
const FILE_PATH = path.join(__dirname, 'README.md');
const API_URL = 'https://api.github.com/repos/nullmoth/nvidia-macos-driver/releases/latest';

async function updateVersion() {
  try {
    const headers = { 'User-Agent': 'VuePress-Local-Updater' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const response = await fetch(API_URL, { headers });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const version = data.tag_name.replace(/^v/, '');
    if (!fs.existsSync(FILE_PATH)) throw new Error(`File not found: ${FILE_PATH}`);
    let fileContent = fs.readFileSync(FILE_PATH, 'utf8');
    const targetRegex = /Current supported version:\s*[\d.]+/;
    if (!targetRegex.test(fileContent)) throw new Error('Version line not found in README.md');
    fileContent = fileContent.replace(targetRegex, `Current supported version: ${version}`);
    fs.writeFileSync(FILE_PATH, fileContent, 'utf8');
  } catch (error) {
    console.error(`update.js skipped: ${error.message}`);
  }
}

updateVersion();