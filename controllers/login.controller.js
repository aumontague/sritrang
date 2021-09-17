'use strict';

var fs = require('fs');
const _ = require('lodash');

var con_login = require('../models/login.js');
var login = new con_login.login();

module.exports = (app) => {

    app.post('/api/userLogin', function(req, res) {
        var dataPost = req.body;
        
        var result = login.checkLogin(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });

    })

}
