'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_price = require('../models/price.js');
var price = new con_price.price();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

module.exports = (app) => {

    app.get('/api/price/list', function(req, res) {
        var dataPost = req.body;        
        var result = price.priceList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/price/create', function(req, res) {
        var dataPost = req.body;     
        const table = "Price";
        const col = "PriceNo";

        checkNo.checkNo(req, dataPost, _, table, col).then(function(result) {
            if(result.status == true){
                var result1 = price.priceInsert(req, dataPost, _).then(function(resp) {
                    res.json(resp);
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

    app.post('/api/price/update', function(req, res) {
        var dataPost = req.body;        
        var result = price.priceUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        }); 
    })

    app.post('/api/price/delete', function(req, res) {
        var dataPost = req.body;        
        var result = price.priceDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/price/detail', function(req, res) {
        var dataPost = req.body;        
        var result = price.priceDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/price/detail/list', function(req, res) {
        var dataPost = req.body;        
        var result = price.priceDetailList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/price/detail/create', function(req, res) {
        var dataPost = req.body;        
        var result = price.priceDetailInsert(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/price/detail/update', function(req, res) {
        var dataPost = req.body;        
        var result = price.priceDetailUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/price/detail/delete', function(req, res) {
        var dataPost = req.body;        
        var result = price.priceDetailDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/price/detail/detail', function(req, res) {
        var dataPost = req.body;        
        var result = price.priceDetailDetail(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })
    
}
