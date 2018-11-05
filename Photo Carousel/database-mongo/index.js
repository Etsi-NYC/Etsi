var mongoose = require("mongoose");
var MONGO = require("../config").MONGO;
var mongoURL = process.env.MONGO || MONGO;

mongoose.connect(
  mongoURL,
  { useMongoClient: true }
);

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

var phocaroSchema = new mongoose.Schema({
  id: Number,
  pictureUrls: [String],
  description: String
});

var PhoCaro = mongoose.model("PhoCaro", phocaroSchema);

module.exports.db = db;
module.exports.PhoCaro = PhoCaro;
