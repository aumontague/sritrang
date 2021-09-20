'use strict';

var fs = require('fs');
const _ = require('lodash');

var con_branch = require('../models/branch.js');
var branch = new con_branch.branch();

module.exports = (app) => {

    // app.get('/api/branch/list', function(req, res) {
    //     var dataPost = req.body;
        
    //     var result = branch.branchList(req, dataPost, _).then(function(result) {
    //         res.json(result);
    //     }).catch(function(error) {
    //         res.send('Error: ' + error);
    //     });

    // })

    app.post('/api/branch/create', function(req, res) {
        var dataPost = req.body;        
        var result = branch.branchInsertInformation(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/branch/update', function(req, res) {
        var dataPost = req.body;
        
        var result = branch.branchUpdateInformation(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.post('/api/branch/detail', function(req, res) {
        var dataPost = req.body;
        
        var result = branch.BranchInformationDetail(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.post('/api/branch/warehouse/list', function(req, res) {
        var dataPost = req.body;        
        var result = branch.branchWarehouseList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/branch/warehouse/create', function(req, res) {
        var dataPost = req.body;        
        var result = branch.branchInsertWarehouse(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/branch/warehouse/update', function(req, res) {
        var dataPost = req.body;        
        var result = branch.branchUpdateWarehouse(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/branch/warehouse/detail', function(req, res) {
        var dataPost = req.body;
        
        var result = branch.branchWarehouseDetail(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.post('/api/branch/warehouse/delete', function(req, res) {
        var dataPost = req.body;
        
        var result = branch.branchDeleteWarehouse(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.post('/api/branch/delete', function(req, res) {
        var dataPost = req.body;
        
        var result = branch.branchDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

}
