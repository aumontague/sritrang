'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_tranport = require('../models/tranport.js');
var tranport = new con_tranport.tranport();

module.exports = (app) => {

    app.get('/api/tranport/list', function(req, res) {
        var dataPost = req.body;        
        var result = tranport.tranportList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/tranport/create', function(req, res) {
        var dataPost = req.body;        
        var result = tranport.tranportInsert(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/tranport/update', function(req, res) {
        var dataPost = req.body;        
        var result = tranport.tranportUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/tranport/delete', function(req, res) {
        var dataPost = req.body;        
        var result = employee.tranportDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/tranport/detail', function(req, res) {
        var dataPost = req.body;        
        var result = tranport.tranportDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
}
