Run MongoDB_examples

to test a simple connection and close 

module.exports.node_mode_threads   =  [
                                        ['reg_group',      'closing_client'          ],                            
                                      ] 

for the insert Documents functionality                                      

module.exports.node_mode_threads   =  [
                                        ['ins_D_group',      'closing_client'          ],
                                        ['ins_D_group',      'inserting_documents'     ],                           
                                      ]


to see the Docuemnents in a specific collection of a specific database

module.exports.node_mode_threads   =  [
                                        ['find_D_group',      'closing_client'          ],
                                        ['find_D_group',      'finding_documents'       ],                           
                                      ] 

to find spec docs in a spec collection in a spec database


module.exports.node_mode_threads   =  [
                                        ['find_D_group',      'closing_client'                   ],
                                        ['find_D_group',      'finding_specific_documents'       ],                           
                                      ] 