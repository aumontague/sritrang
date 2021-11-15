'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_vehicle = require('../models/vehicle.js');
var vehicle = new con_vehicle.vehicle();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

module.exports = (app) => {

    app.get('/api/vehicle/list', function(req, res) {
        var dataPost = req.body;        
        var result = vehicle.vehicleList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/vehicle/create', function(req, res) {
        var dataPost = req.body;  
        const table = "Vehicle";
        const col = "VehicleNo";

        checkNo.checkNo(req, dataPost, _, table, col).then(function(result) {
            if(result.status == true){
                var result1 = vehicle.vehicleInsert(req, dataPost, _).then(function(result) {
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

    app.post('/api/vehicle/update', function(req, res) {
        var dataPost = req.body;        
        var result = vehicle.vehicleUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/vehicle/delete', function(req, res) {
        var dataPost = req.body;        
        var result = vehicle.vehicleDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/vehicle/detail', function(req, res) {
        var dataPost = req.body;        
        var result = vehicle.vehicleDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
}
