'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_terms = require('../models/terms.js');
var terms = new con_terms.terms();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

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
        const table = "FreightTerms";
        const col = "FreightTermsNo";

        checkNo.checkNo(req, dataPost, _, table, col).then(function(result) {
            if(result.status == true){
                var result1 = terms.termsInsert(req, dataPost, _).then(function(result) {
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
        var result = terms.termsDelete(req, dataPost, _).then(function(result) {
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
