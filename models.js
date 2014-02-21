
var Mongoose = require('mongoose');


var DataSchema = new Mongoose.Schema({
  // fields are defined here
  "username": String,
  "password": String,
  "age": String,
  "weight": String,
  "goal": String,
  "comments": String,
  "imageURL": String
});

exports.data = Mongoose.model('data', DataSchema);


