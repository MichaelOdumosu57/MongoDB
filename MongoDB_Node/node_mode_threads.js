// n_m_t_registry is a thread register for all node_modes in your API, this 
// should be optional helping the developer focus on groups in a different way
// you can add to the n_m_t_registry in the API  for more dynamics

module.exports.n_m_t_registry = {
                                    close_MongoDB_n_m:[['reg_group',
                                                        ['closing_client','closing_client_dangerous']
                                                      ],                                                                                                     
                                                      ['pipe_group',
                                                        ['stream_finished']
                                                      ]] 
                                }

module.exports.node_mode_threads   =  [
                                        ['reg_group',      'closing_client'          ],                            
                                        ['reg_group',      'unknown'                 ],
                                        ['reg_group',      'prevent'                 ],
                                        ['reg_group',      'stream_finished'         ],
                                        ['reg_group',      'unpipe_pause'            ],
                                        ['reg_group',      'prevent'                 ],
                                        ['reg_group',      ''                        ],
                                        ['reg_group',      ''                        ],
                                        ['reg_group',      'prevent'                 ],
                                        [,''],
                                        [,''],
                                      ] 

                          