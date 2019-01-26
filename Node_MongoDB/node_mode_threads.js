// n_m_t_registry is a thread register for all node_modes in your API, this 
// should be optional helping the developer focus on groups in a different way
// you can add to the n_m_t_registry in the API  for more dynamics

module.exports.n_m_t_registry = {
                                    close_MongoDB_n_m:[['reg_group',
                                                        ['closing_client','closing_client_dangerous']
                                                      ],                                                                                                     
                                                      ['ins_D_group',
                                                        ['closing_client','closing_client_dangerous']
                                                      ]],
                                    MongoDB_examples_n_m: [['reg_group',
                                                            ['']
                                                          ],                                                                                                     
                                                          ['ins_D_group',
                                                            ['inserting_documents']
                                                          ]],                  
                                }

module.exports.node_mode_threads   =  [
                                        ['ins_D_group',      'closing_client'          ],
                                        ['ins_D_group',      'inserting_documents'     ],                           
                                      ] 

                          