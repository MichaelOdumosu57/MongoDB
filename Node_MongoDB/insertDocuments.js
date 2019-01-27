const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
module.exports = function(   dev_obj   ) {
  // Get the documents collection  
  // Insert some documents
  console.group(   file_name   )
    console.log(   dev_obj   )
    debugger;
    const ins_D_collection = dev_obj.db.collection(   dev_obj.collection   );    
    ins_D_collection.insertMany(dev_obj.documents  , function(err, result) {
        // assert.equal(err, null);
        // assert.equal(3, result.result.n);
        // assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        dev_obj.callback({
                  result
                });
    });
  console.groupEnd()
}