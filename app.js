
var express = require('express');
var msg = require('./src/msg');

var app = express();

app.get('/', function (req, res) {
  res.send(msg());
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
