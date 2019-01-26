var MongoClient = require('mongodb').MongoClient;
var connection_string = require('./credentials.js').c_string

var uri = connection_string;
MongoClient.connect(uri,  { useNewUrlParser: true }  function(err, db) {
  // Paste the following examples here

  db.close();
});