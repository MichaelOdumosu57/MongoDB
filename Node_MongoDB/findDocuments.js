const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
module.exports = function(   dev_obj   ) {
	// Get the documents collection
	console.group(   file_name   )
		console.log(   dev_obj   )		
		// Find some documents
		dev_obj.collection.find(   dev_obj.doc_to_find   ).toArray(function(err, docs) {			
			console.log("Found the following records");
			var dev_obj_0_i = arguments;
			console.log(   dev_obj_0_i   )			
			dev_obj.callback();
			debugger;
	console.groupEnd()
		});
}