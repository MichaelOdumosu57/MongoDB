var MongoClient = require('mongodb').MongoClient;
const circular_replacer = require('./circular_replacer.js')
var uri = 'mongodb://localhost:27017';
async function close_db(c_db){
	c_db.close()
}
MongoClient.connect(uri,  { useNewUrlParser: true } , function(err, db) {


	if(   err   ){
		console.log(   err   )
	}	
	// Get the documents collection
	console.log(   JSON.stringify(   db,circular_replacer(),2   )   )
	debugger;
	const collection = db.collection('documents');
	var collection_insert  = [
								{a : 1}, 
								{a : 2}, 
								{a : 3}
							 ]
	// Insert some documents
	collection.insertMany(   collection_insert, function(   err, result   ) {


		if(   err   ){
			close_db(   db   )
		}
		// assert.equal(err, null);
		// assert.equal(3, result.result.n);
		// assert.equal(3, result.ops.length);
		console.log(   "Inserted 3 documents into the collection"   );
		console.log(   result   );
	});	 	
	close_db(   db   )
});