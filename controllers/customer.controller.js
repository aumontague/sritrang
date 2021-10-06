'use strict';

var fs = require('fs');
const _ = require('lodash');

var con_customer = require('../models/customer.js');
var customer = new con_customer.customer();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

module.exports = (app) => {

    app.get('/api/customer/list', function(req, res) {
        var dataPost = req.body;
        
        var result = customer.customerList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.post('/api/customer/create', function(req, res) {
        var dataPost = req.body;   
        const table = "Customer";
        const col = "CustomerCode";

        checkNo.checkNo(req, dataPost, _, table, col).then(function(result) {
            if(result.status == true){
                var result1 = customer.customerInsertInformation(req, dataPost, _).then(function(result) {
                    res.json(result);
                }).catch(function(error) {
                    res.send('Error: ' + error);
                }); 
            }else{
                res.send(result);
            }
        }).catch(function(error) {
            res.send('Error: ' + error);
        });      

        
    })

    app.post('/api/customer/update', function(req, res) {
        var dataPost = req.body;
        
        var result = customer.customerUpdateInformation(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.post('/api/customer/detail/information', function(req, res) {
        var dataPost = req.body;
        
        var result = customer.customerInformation(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.post('/api/customer/factory', function(req, res) {
        var dataPost = req.body;        
        var result = customer.customerFactory(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/customer/factory/create', function(req, res) {
        var dataPost = req.body;  
        const table = "Factory";
        const col = "FactoryCode";

        checkNo.checkNo(req, dataPost, _, table, col).then(function(result) {
            if(result.status == true){
                var result1 = customer.customerInsertFactory(req, dataPost, _).then(function(result) {
                    res.json(result);
                }).catch(function(error) {
                    res.send('Error: ' + error);
                });
            }else{
                res.send(result);
            }
        }).catch(function(error) {
            res.send('Error: ' + error);
        });    
    })

    app.post('/api/customer/factory/update', function(req, res) {
        var dataPost = req.body;        
        var result = customer.customerUpdateFactory(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/customer/detail/factory', function(req, res) {
        var dataPost = req.body;
        
        var result = customer.customerFactory(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.post('/api/customer/factory/delete', function(req, res) {
        var dataPost = req.body;
        
        var result = customer.customerDeleteFactory(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.post('/api/customer/delete', function(req, res) {
        var dataPost = req.body;
        
        var result = customer.customerDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

}
