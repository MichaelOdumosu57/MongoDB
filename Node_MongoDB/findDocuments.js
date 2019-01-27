const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
module.exports = function() {
	// Get the documents collection
	console.group(   file_name   )
		console.log(   arguments[0]   )		
		debugger;
		// Find some documents
		arguments[0].collection.find({}).toArray(function(err, docs) {			
			console.log("Found the following records");
			console.log(docs)
			arguments[0].callback(docs);
		});
	console.groupEnd()
}