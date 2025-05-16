const { readSoups, writeSoups } = require('../models/soupsModel');

exports.getAllSoups = (req, res) => {
  res.json(readSoups());
};

exports.getSoupById = (req, res) => {
  const soups = readSoups();
  const soup = soups.find(s => s.id === parseInt(req.params.id));
  if (!soup) return res.status(404).json({ message: 'Soup not found' });
  res.json(soup);
};

exports.createSoup = (req, res) => {
  const soups = readSoups();
  const newSoup = {
    id: soups.length ? soups[soups.length - 1].id + 1 : 1,
    name: req.body.name
  };
  soups.push(newSoup);
  writeSoups(soups);
  res.status(201).json(newSoup);
};

exports.updateSoup = (req, res) => {
  const soups = readSoups();
  const index = soups.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Soup not found' });
  soups[index].name = req.body.name;
  writeSoups(soups);
  res.json(soups[index]);
};

exports.deleteSoup = (req, res) => {
  const soups = readSoups();
  const index = soups.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Soup not found' });
  const removed = soups.splice(index, 1)[0];
  writeSoups(soups);
  res.json(removed);
};

