const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3004;

app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use("/listing", express.static(path.join(__dirname, '/public')));

app.get("/api/:id", (req, res) => {
	axios.get(`http://18.191.123.82/api/${req.params.id}`)
		.then(result => res.send(result.data))
});

app.get("/listing/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(port, () => {
  console.log(`server running at: ${port}`);
});


