'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_container = require('../models/container.js');
var container = new con_container.container();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

module.exports = (app) => {

    app.get('/api/container/list', function(req, res) {
        var dataPost = req.body;        
        var result = container.containerList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/container/create', function(req, res) {
        var dataPost = req.body;        
        const table = "ContainerType";
        const col = "ContainerTypeNo";

        checkNo.checkNo(req, dataPost, _, table, col).then(function(result) {
            if(result.status == true){
                var result1 = container.containerInsert(req, dataPost, _).then(function(result) {
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

    app.post('/api/container/update', function(req, res) {
        var dataPost = req.body;        
        var result = container.containerUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/container/delete', function(req, res) {
        var dataPost = req.body;        
        var result = employee.containerDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/container/detail', function(req, res) {
        var dataPost = req.body;        
        var result = container.containerDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
}
