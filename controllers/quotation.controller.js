'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_quotation = require('../models/quotation.js');
var quotation = new con_quotation.quotation();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

module.exports = (app) => {

    // app.get('/api/quotation/list', function(req, res) {
    //     var dataPost = req.body;        
    //     var result = quotation.quotationList(req, dataPost, _).then(function(result) {
    //         res.json(result);
    //     }).catch(function(error) {
    //         res.send('Error: ' + error);
    //     });
    // })

    app.post('/api/quotation/create', function(req, res) {
        var dataPost = req.body;     
        const table = "Quotation";
        const col = "QuotationNo";

        checkNo.checkNo(req, dataPost, _, table, col).then(function(result) {
            if(result.status == true){
                var result1 = quotation.quotationInsert(req, dataPost, _).then(function(resp) {
                    res.json(resp);
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

    app.post('/api/quotation/update', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        }); 
    })

    app.post('/api/quotation/delete', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    // app.post('/api/quotation/detail', function(req, res) {
    //     var dataPost = req.body;        
    //     var result = quotation.quotationDetails(req, dataPost, _).then(function(result) {
    //         res.json(result);
    //     }).catch(function(error) {
    //         res.send('Error: ' + error);
    //     });
    // })

    app.post('/api/quotation/detail/list', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationDetailList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/quotation/detail/create', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationDetailInsert(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/quotation/detail/update', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationDetailUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/quotation/detail/delete', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationDetailDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/quotation/detail/detail', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationDetailDetail(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })
    
}
