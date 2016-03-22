
var express = require('express');
var msg = require('./src/msg');

var app = express();

app.get('/', function (req, res) {
  res.send(msg());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
