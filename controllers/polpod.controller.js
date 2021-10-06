'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_polpod = require('../models/polpod.js');
var polpod = new con_polpod.polpod();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

module.exports = (app) => {

    app.get('/api/polpod/list', function(req, res) {
        var dataPost = req.body;        
        var result = polpod.polpodList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/polpod/create', function(req, res) {
        var dataPost = req.body;        
        const table = "PolPod";
        const col = "PolPodNo";

        checkNo.checkNo(req, dataPost, _, table, col).then(function(result) {
            if(result.status == true){
                var result1 = polpod.polpodInsert(req, dataPost, _).then(function(result) {
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

    app.post('/api/polpod/update', function(req, res) {
        var dataPost = req.body;        
        var result = polpod.polpodUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/polpod/delete', function(req, res) {
        var dataPost = req.body;        
        var result = employee.polpodDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/polpod/detail', function(req, res) {
        var dataPost = req.body;        
        var result = polpod.polpodDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
}
