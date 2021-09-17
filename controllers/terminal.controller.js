'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_terminal = require('../models/terminal.js');
var terminal = new con_terminal.terminal();

module.exports = (app) => {
    
    app.get('/api/terminal/list', function(req, res) {
        var dataPost = req.body;        
        var result = terminal.terminalList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/terminal/create', function(req, res) {
        var dataPost = req.body;        
        var result = terminal.terminalInsert(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/terminal/update', function(req, res) {
        var dataPost = req.body;        
        var result = terminal.terminalUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/terminal/delete', function(req, res) {
        var dataPost = req.body;        
        var result = employee.terminalDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/terminal/detail', function(req, res) {
        var dataPost = req.body;        
        var result = terminal.terminalDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
}
