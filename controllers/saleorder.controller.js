'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_saleorder = require('../models/saleorder.js');
var saleorder = new con_saleorder.saleorder();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();
var moment = require('moment');


module.exports = (app) => {

    app.get('/api/saleorder/list', function(req, res) {
        var dataPost = req.body;        
        var result = saleorder.saleorderList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/saleorder/create', function(req, res) {
        var dataPost = req.body;     
        var SalesOrderNo = "SO";

        checkNo.checkSalesOrderNo(req, dataPost, _).then(function(result) {
            if(result.status == false){
                var year = moment().year()+543;
                var month = moment().format("MM");
                var miniYear = year.toString().substr(2,4);
                SalesOrderNo = SalesOrderNo + miniYear + month + '0001';
                dataPost.no = SalesOrderNo
                var result1 = saleorder.saleorderInsert(req, dataPost, _).then(function(resp) {
                    res.json(resp);
                }).catch(function(error) {
                    res.send('Error: ' + error);
                });   
            }else{
                var year = moment().year()+543;
                var month = moment().format("MM");
                var miniYear = year.toString().substr(2,4);
                var miniQTDB = result.data.SoNumber.substr(2,4);

                var miniQT = miniYear+month
                if(miniQTDB == miniQT){
                    var num = result.data.SoNumber.substr(6,9);
                    var noQT = "";
                    num++;
                    noQT = pad(num, 4);
                    SalesOrderNo = SalesOrderNo + miniQTDB + noQT;
                    dataPost.no = SalesOrderNo;
                    var result1 = saleorder.saleorderInsert(req, dataPost, _).then(function(resp) {
                        res.json(resp);
                    }).catch(function(error) {
                        res.send('Error: ' + error);
                    });   
                }else{
                    SalesOrderNo = SalesOrderNo + miniQT + '0001';
                    dataPost.no = SalesOrderNo
                    var result1 = saleorder.saleorderInsert(req, dataPost, _).then(function(resp) {
                        res.json(resp);
                    }).catch(function(error) {
                        res.send('Error: ' + error);
                    });   
                }
            }
        }).catch(function(error) {
            res.send('Error: ' + error);
        });      
              
    })

    app.post('/api/saleorder/update', function(req, res) {
        var dataPost = req.body;        
        var result = saleorder.saleorderUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/saleorder/detail', function(req, res) {
        var dataPost = req.body;        
        var result = saleorder.saleorderDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/saleorder/mt/create', function(req, res) {
        var dataPost = req.body;        
        var result = saleorder.saleorderMtInsert(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/saleorder/mt/delete', function(req, res) {
        var dataPost = req.body;        
        var result = saleorder.saleorderMtDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/saleorder/plan/create', function(req, res) {
        var dataPost = req.body;        
        var result = saleorder.saleorderPlanInsert(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/saleorder/plan/delete', function(req, res) {
        var dataPost = req.body;        
        var result = saleorder.saleorderPlanDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/saleorder/laden/create', function(req, res) {
        var dataPost = req.body;        
        var result = saleorder.saleorderLadenInsert(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/saleorder/laden/delete', function(req, res) {
        var dataPost = req.body;        
        var result = saleorder.saleorderLadenDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    function pad (str, max) {
        str = str.toString();
        return str.length < max ? pad("0" + str, max) : str;
    }
}
