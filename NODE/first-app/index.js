const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('App running on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

/*

$npm init
$npm i nodemon express

  "scripts": {
    "dev": "nodemon index.js",
  },

  */
