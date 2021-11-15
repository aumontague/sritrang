'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_workorder = require('../models/workorder.js');
var workorder = new con_workorder.workorder();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

module.exports = (app) => {

    app.get('/api/workorder/list', function(req, res) {
        var dataPost = req.body;        
        var result = workorder.workorderList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/workorder/create', function(req, res) {
        var dataPost = req.body;  
        var result = workorder.workorderInsert(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });                   
    })

    app.post('/api/workorder/update', function(req, res) {
        var dataPost = req.body;        
        var result = workorder.workorderUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    // app.post('/api/vehicle/delete', function(req, res) {
    //     var dataPost = req.body;        
    //     var result = vehicle.vehicleDelete(req, dataPost, _).then(function(result) {
    //         res.json(result);
    //     }).catch(function(error) {
    //         res.send('Error: ' + error);
    //     });
    // })

    app.post('/api/workorder/detail', function(req, res) {
        var dataPost = req.body;        
        var result = workorder.workorderDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
}
