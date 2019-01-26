const fs = require('fs')
const events = require('events')
const path = require('path');
// const assert = require('assert')
const required_dir = path.join(process.env.HOME, 'req_mod_node')
const read_monitor = require(required_dir + '/read_monitor.js')
const async_listener = require(required_dir +'/async_listener.js')
const node_mode = require(required_dir +'/node_mode.js')
const node_mode_threads = require('./node_mode_threads.js').node_mode_threads
const n_m_t_r = require('./node_mode_threads.js').n_m_t_registry
const circular_replacer = require(required_dir +'/circular_replacer.js')
const readable_e_r_unshift = require(required_dir +'/r_e_r_unshift.js')
const stream_finished = require(required_dir + '/stream_finished.js')
const pipeline = require(required_dir + '/pipeline.js')
const drain = require(required_dir + '/drain.js')
const cork_and_uncork = require(required_dir + '/cork_and_uncork.js')
const r_p = require(required_dir + '/readable_pause.js')
const c_u = cork_and_uncork()
const d_rn = drain()
const s_f = stream_finished()
const a_l = async_listener()
const p_l = pipeline()
const p_uE = require(   required_dir + '/process_uncaughtException.js'   )
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

	const close_MongoDB_n_m = node_mode(n_m_t_r.close_MongoDB_n_m,[[      
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
	const db = client.db(   MongoDB_data.db_1_i.name   );
	console.log(   JSON.stringify(   db,circular_replacer(),2   )   )
	close_MongoDB_n_m.emit(   node_mode_threads[0][0],node_mode_threads[0][1]   ) 


 
});