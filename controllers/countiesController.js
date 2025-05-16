const { readCounties, writeCounties } = require('../models/countiesModel');

exports.getAllCounties = (req, res) => {
  res.json(readCounties());
};

exports.getCountyById = (req, res) => {
  const counties = readCounties();
  const county = counties.find(c => c.id === parseInt(req.params.id));
  if (!county) return res.status(404).json({ message: 'County not found' });
  res.json(county);
};

exports.createCounty = (req, res) => {
  const counties = readCounties();
  const newCounty = {
    id: counties.length ? counties[counties.length - 1].id + 1 : 1,
    name: req.body.name
  };
  counties.push(newCounty);
  writeCounties(counties);
  res.status(201).json(newCounty);
};

exports.updateCounty = (req, res) => {
  const counties = readCounties();
  const index = counties.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'County not found' });
  counties[index].name = req.body.name;
  writeCounties(counties);
  res.json(counties[index]);
};

exports.deleteCounty = (req, res) => {
  const counties = readCounties();
  const index = counties.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'County not found' });
  const removed = counties.splice(index, 1)[0];
  writeCounties(counties);
  res.json(removed);
};
