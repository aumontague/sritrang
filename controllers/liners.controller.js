'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_liners = require('../models/liners.js');
var liners = new con_liners.liners();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

module.exports = (app) => {

    app.get('/api/liners/list', function(req, res) {
        var dataPost = req.body;        
        var result = liners.linersList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/liners/create', function(req, res) {
        var dataPost = req.body;        
        const table = "Liners";
        const col = "LinersNo";

        checkNo.checkNo(req, dataPost, _, table, col).then(function(result) {
            if(result.status == true){
                var result1 = liners.linersInsert(req, dataPost, _).then(function(result) {
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

    app.post('/api/liners/update', function(req, res) {
        var dataPost = req.body;        
        var result = liners.linersUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/liners/delete', function(req, res) {
        var dataPost = req.body;        
        var result = employee.linersDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/liners/detail', function(req, res) {
        var dataPost = req.body;        
        var result = liners.linersDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
}
