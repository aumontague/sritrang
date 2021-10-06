'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_transshipment = require('../models/transshipment.js');
var transshipment = new con_transshipment.transshipment();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

module.exports = (app) => {

    app.get('/api/transshipment/list', function(req, res) {
        var dataPost = req.body;        
        var result = transshipment.transshipmentList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/transshipment/create', function(req, res) {
        var dataPost = req.body;     
        const table = "Transshipment";
        const col = "TransshipmentNo";

        checkNo.checkNo(req, dataPost, _, table, col).then(function(result) {
            if(result.status == true){
                var result1 = transshipment.transshipmentInsert(req, dataPost, _).then(function(result) {
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

    app.post('/api/transshipment/update', function(req, res) {
        var dataPost = req.body;        
        var result = transshipment.transshipmentUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/transshipment/delete', function(req, res) {
        var dataPost = req.body;        
        var result = employee.transshipmentDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/transshipment/detail', function(req, res) {
        var dataPost = req.body;        
        var result = transshipment.transshipmentDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
}
