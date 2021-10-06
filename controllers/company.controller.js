'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_company = require('../models/company.js');
var company = new con_company.company();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

module.exports = (app) => {

    app.get('/api/company/list', function(req, res) {
        var dataPost = req.body;        
        var result = company.companyList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/company/detail', function(req, res) {
        var dataPost = req.body;        
        var result = company.companyDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/company/create', function(req, res) {
        var dataPost = req.body;       
        const table = "Company";
        const col = "CompanyNo";

        checkNo.checkNo(req, dataPost, _, table, col).then(function(result) {
            if(result.status == true){
                var result1 = company.companyInsert(req, dataPost, _).then(function(result) {
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

    app.post('/api/company/update', function(req, res) {
        var dataPost = req.body; 
        var result = company.companyUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/company/delete', function(req, res) {
        var dataPost = req.body;        
        var result = company.companyDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })



}
