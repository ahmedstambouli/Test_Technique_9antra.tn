const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Bonjour le monde !');
});

app.listen(port, () => {
  console.log(`L'application écoute sur le port ${port}`);
});
