'use strict';

var fs = require('fs');
const _ = require('lodash');
var moment = require('moment');


var con_sample = require('../models/sample.js');
var sample = new con_sample.sample();

module.exports = (app) => {

    app.get('/api/sample', function(req, res) {
        var dataPost = req.body;
        
        var result = sample.sheetTwelve(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

}
