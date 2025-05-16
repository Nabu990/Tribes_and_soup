const fs = require('fs');
const path = './data/soups.json';

function readSoups() {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function writeSoups(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

module.exports = { readSoups, writeSoups };
