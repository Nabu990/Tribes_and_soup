const fs = require('fs');
const path = './data/counties.json';

function readCounties() {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function writeCounties(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

module.exports = { readCounties, writeCounties };
