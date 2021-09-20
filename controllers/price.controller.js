'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_price = require('../models/price.js');
var price = new con_price.price();

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
        var result = price.priceInsert(req, dataPost, _).then(function(result) {
            res.json(result);
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
