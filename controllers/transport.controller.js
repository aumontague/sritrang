'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_transport = require('../models/transport.js');
var transport = new con_transport.transport();

module.exports = (app) => {

    app.get('/api/transport/list', function(req, res) {
        var dataPost = req.body;        
        var result = transport.transportList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/transport/create', function(req, res) {
        var dataPost = req.body;        
        var result = transport.transportInsert(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/transport/update', function(req, res) {
        var dataPost = req.body;        
        var result = transport.transportUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/transport/delete', function(req, res) {
        var dataPost = req.body;        
        var result = transport.transportDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/transport/detail', function(req, res) {
        var dataPost = req.body;        
        var result = transport.transportDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
}
