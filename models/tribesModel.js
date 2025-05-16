const fs = require('fs');
const path = './data/tribes.json';

function readTribes() {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function writeTribes(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

module.exports = { readTribes, writeTribes };
