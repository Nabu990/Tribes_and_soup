const express = require('express');
const app = express();
const port = 5000;

const soupsRoutes = require('./routes/soups');
const tribesRoutes = require('./routes/tribes');
const countiesRoutes = require('./routes/counties');

app.use(express.json());

app.use('/api/soups', soupsRoutes);
app.use('/api/tribes', tribesRoutes);
app.use('/api/counties', countiesRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Liberia Info API');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
