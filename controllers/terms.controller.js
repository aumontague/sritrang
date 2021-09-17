'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_terms = require('../models/terms.js');
var terms = new con_terms.terms();

module.exports = (app) => {

    app.get('/api/terms/list', function(req, res) {
        var dataPost = req.body;        
        var result = terms.termsList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/terms/create', function(req, res) {
        var dataPost = req.body;        
        var result = terms.termsInsert(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/terms/update', function(req, res) {
        var dataPost = req.body;        
        var result = terms.termsUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/terms/delete', function(req, res) {
        var dataPost = req.body;        
        var result = employee.termsDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/terms/detail', function(req, res) {
        var dataPost = req.body;        
        var result = terms.termsDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
}
