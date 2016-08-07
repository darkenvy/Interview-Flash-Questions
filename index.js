var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, function() {
  console.log('app listening on port:', PORT);
});