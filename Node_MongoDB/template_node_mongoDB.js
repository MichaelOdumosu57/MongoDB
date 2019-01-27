const n_API = require(process.env.HOME+ "/Required/node_API_header.js").n_API_init({
	"p_uE":true,
	"MongoClient":true,
	"MongoDB_data":true,
	"node_mode":true,
	"n_m_t_r":true,
	"circular_replacer":true,
	"node_mode_threads":true,
	"required_dir":true,
	"required_mongoDB_dir":true,
	"insertDocuments":true,
	"required_local_dir":true,
	"findDocuments":true,

},
{
	location_dir:__dirname
});
const p_uE                    =  n_API.API_n_c.API_process.p_uE  
const circular_replacer       =  n_API.API_n_c.circular_replacer 
const insertDocuments         =  n_API.API_n_c.API_mongoDB.insertDocuments 
const findDocuments           =  n_API.API_n_c.API_mongoDB.findDocuments 
var MongoClient               =  n_API.API_n_c.API_mongoDB.MongoClient 
var MongoDB_data              =  n_API.API_n_c.API_mongoDB.MongoDB_data 
const node_mode               =  n_API.API_n_c.API_node_mode.node_mode 
const n_m_t_r                 =  n_API.API_n_c.API_node_mode.n_m_t_r 
const node_mode_threads       =  n_API.API_n_c.API_node_mode.node_mode_threads
p_uE.message = 'closed the MongoDB instance I believe'
p_uE.MongoClient_instance = function(   dev_obj   ){
	dev_obj.c_Mongo.close()
}

var MongoClient = require('mongodb').MongoClient;
var MongoDB_data = require('./MongoDB_data.js')
var url = 'mongodb://localhost:27017';
MongoDB_data.client = new MongoClient(   url,{ useNewUrlParser: true }   ) 
const client = MongoDB_data.client
const close_MongoDB = function(   dev_obj   ){
	console.log(   JSON.stringify(   dev_obj,circular_replacer(),2   )   )
	dev_obj.c_Mongo.close()
}
p_uE.open_items.push([
						"MongoClient_instance",
						{
							c_Mongo :MongoDB_data.client
						}
					])
console.log(   p_uE   )
console.log(   JSON.stringify(   MongoClient,circular_replacer(),2   )   )		 	
// MongoClient.connect(uri,  { useNewUrlParser: true } , function(err, db) {


// 	if(   err   ){
// 		console.log(   err   )
// 	}	

// 	// Get the documents collection
// 	console.log(   JSON.stringify(   db,circular_replacer(),2   )   )
// 	close_db(   db   )
// });


// try to find out what db is, its clearn not a database
client.connect(function(err) {
	const close_MongoDB_n_m = node_mode(n_m_t_r["close_MongoDB_n_m"],[[      
                        'closing_client',
                        function(){                     
							close_MongoDB({
										    c_Mongo:MongoDB_data.client
								  		  })                                 
                        }],
                        ['closing_client_unknown',
                        function(){
							setImmediate(() =>{
								close_MongoDB({
												c_Mongo:MongoDB_data.client
											  })   
							})	
                        }],                                                               
                  ])


	if(   err   ){


		console.log(   err   )
		close_MongoDB_n_m.emit(   node_mode_threads[0][0],node_mode_threads[0][1]   )


    
	}	


	console.log("Connected correctly to server");
	const db = client.db(   MongoDB_data.mongo_db_0_i.name   );
	console.log(   JSON.stringify(   db,circular_replacer(),2   )   )
	close_MongoDB_n_m.emit(   node_mode_threads[0][0],node_mode_threads[0][1]   )  
});