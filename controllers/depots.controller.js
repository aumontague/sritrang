'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_depots = require('../models/depots.js');
var depots = new con_depots.depots();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

module.exports = (app) => {

    app.get('/api/depots/list', function(req, res) {
        var dataPost = req.body;        
        var result = depots.depotsList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/depots/create', function(req, res) {
        var dataPost = req.body;       
        const table = "Depots";
        const col = "DepotsNo";

        checkNo.checkNo(req, dataPost, _, table, col).then(function(result) {
            if(result.status == true){
                var result1 = depots.depotsInsert(req, dataPost, _).then(function(result) {
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

    app.post('/api/depots/update', function(req, res) {
        var dataPost = req.body;        
        var result = depots.depotsUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/depots/delete', function(req, res) {
        var dataPost = req.body;        
        var result = employee.depotsDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/depots/detail', function(req, res) {
        var dataPost = req.body;        
        var result = depots.depotsDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
}
