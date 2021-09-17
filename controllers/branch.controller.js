'use strict';

var fs = require('fs');
const _ = require('lodash');

var con_branch = require('../models/branch.js');
var branch = new con_branch.branch();

module.exports = (app) => {

    app.get('/api/branch/list', function(req, res) {
        var dataPost = req.body;
        
        var result = branch.branchList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

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

    app.post('/api/branch/detail/information', function(req, res) {
        var dataPost = req.body;
        
        var result = branch.branchInformation(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.post('/api/branch/factory', function(req, res) {
        var dataPost = req.body;        
        var result = branch.branchFactory(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/branch/factory/create', function(req, res) {
        var dataPost = req.body;        
        var result = branch.branchInsertFactory(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/branch/factory/update', function(req, res) {
        var dataPost = req.body;        
        var result = branch.branchUpdateFactory(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/branch/detail/factory', function(req, res) {
        var dataPost = req.body;
        
        var result = branch.branchFactory(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

    app.post('/api/branch/factory/delete', function(req, res) {
        var dataPost = req.body;
        
        var result = branch.branchDeleteFactory(req, dataPost, _).then(function(result) {
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
