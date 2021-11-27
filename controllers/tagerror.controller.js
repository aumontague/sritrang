'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_tagerror = require('../models/tagerror.js');
var tagerror = new con_tagerror.tagerror();

module.exports = (app) => {

    app.post('/api/tagerror/list', function(req, res) {
        var dataPost = req.body;        
        var result = tagerror.TagErrorList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/tagerror/create', function(req, res) {
        var dataPost = req.body;        
        var result = tagerror.TagErrorInsert(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });    
              
    })

}
