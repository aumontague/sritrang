'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_forwarder = require('../models/forwarder.js');
var forwarder = new con_forwarder.forwarder();

module.exports = (app) => {

    app.get('/api/forwarder/list', function(req, res) {
        var dataPost = req.body;        
        var result = forwarder.forwarderList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/forwarder/create', function(req, res) {
        var dataPost = req.body;        
        var result = forwarder.forwarderInsert(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/forwarder/update', function(req, res) {
        var dataPost = req.body;        
        var result = forwarder.forwarderUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/forwarder/delete', function(req, res) {
        var dataPost = req.body;        
        var result = employee.forwarderDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/forwarder/detail', function(req, res) {
        var dataPost = req.body;        
        var result = forwarder.forwarderDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
}
