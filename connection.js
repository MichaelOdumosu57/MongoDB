var MongoClient = require('mongodb').MongoClient;
var c_string = require('./impt.js').c_string
const circular_replacer = require('./circular_replacer.js')
var uri = c_string;
MongoClient.connect(uri,  { useNewUrlParser: true } , function(err, db) {
  // Paste the following examples here
  console.log(err)
  console.log(JSON.stringify(db,circular_replacer()))
  db.close();
});