'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_master = require('../models/master.js');
var master = new con_master.master();

module.exports = (app) => {

 
    app.get('/api/master/company', function(req, res) {
        var dataPost = req.body;
        
        var result = master.masterCompany(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.get('/api/master/branch', function(req, res) {
        var dataPost = req.body;
        
        var result = master.masterBranch(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.get('/api/master/department', function(req, res) {
        var dataPost = req.body;
        
        var result = master.masterDepartment(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.get('/api/master/role', function(req, res) {
        var dataPost = req.body;
        
        var result = master.masterRole(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.get('/api/master/country', function(req, res) {
        var dataPost = req.body;
        
        var result = master.masterCountry(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.get('/api/master/location', function(req, res) {
        var dataPost = req.body;
        
        var result = master.masterLocation(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })
}
