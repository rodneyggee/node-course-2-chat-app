require ('./config/config');
const path = require ('path');
const publicPath = path.join (__dirname, '../public');

const express = require ('express');

var app = express ();
const port = process.env.PORT;

app.use (express.static(publicPath));

app.listen (port, () => {
  console.log ("App stating on port ", port);
})
