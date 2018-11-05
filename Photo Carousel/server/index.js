var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var morgan = require('morgan');
var routes = require('./routes');

var app = express();


app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/', routes)

app.listen(process.env.PORT || 3000, function() {
  console.log(`listening on port ${process.env.PORT || 3000}`);
});
