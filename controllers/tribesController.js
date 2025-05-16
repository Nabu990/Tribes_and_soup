const { readTribes, writeTribes } = require('../models/tribesModel');

exports.getAllTribes = (req, res) => {
  res.json(readTribes());
};

exports.getTribeById = (req, res) => {
  const tribes = readTribes();
  const tribe = tribes.find(t => t.id === parseInt(req.params.id));
  if (!tribe) return res.status(404).json({ message: 'Tribe not found' });
  res.json(tribe);
};

exports.createTribe = (req, res) => {
  const tribes = readTribes();
  const newTribe = {
    id: tribes.length ? tribes[tribes.length - 1].id + 1 : 1,
    name: req.body.name
  };
  tribes.push(newTribe);
  writeTribes(tribes);
  res.status(201).json(newTribe);
};

exports.updateTribe = (req, res) => {
  const tribes = readTribes();
  const index = tribes.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Tribe not found' });
  tribes[index].name = req.body.name;
  writeTribes(tribes);
  res.json(tribes[index]);
};

exports.deleteTribe = (req, res) => {
  const tribes = readTribes();
  const index = tribes.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Tribe not found' });
  const removed = tribes.splice(index, 1)[0];
  writeTribes(tribes);
  res.json(removed);
};
