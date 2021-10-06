'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_commodity = require('../models/commodity.js');
var commodity = new con_commodity.commodity();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

module.exports = (app) => {

    app.get('/api/commodity/list', function(req, res) {
        var dataPost = req.body;        
        var result = commodity.commodityList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/commodity/create', function(req, res) {
        var dataPost = req.body;
        const table = "Commodity";
        const col = "CommodityNO";

        checkNo.checkNo(req, dataPost, _, table, col).then(function(result) {
            if(result.status == true){
                var result1 = commodity.commodityInsert(req, dataPost, _).then(function(result) {
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

    app.post('/api/commodity/update', function(req, res) {
        var dataPost = req.body;        
        var result = commodity.commodityUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/commodity/delete', function(req, res) {
        var dataPost = req.body;        
        var result = employee.commodityDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/commodity/detail', function(req, res) {
        var dataPost = req.body;        
        var result = commodity.commodityDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
}
