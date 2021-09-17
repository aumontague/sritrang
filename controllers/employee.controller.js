'use strict';

var fs = require('fs');
const _ = require('lodash');
var con_employee = require('../models/employee.js');
var employee = new con_employee.employee();
const bcrypt = require('bcrypt');

module.exports = (app) => {

    app.get('/api/employee/list', function(req, res) {
        var dataPost = req.body;        
        var result = employee.employeeList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/employee/create', function(req, res) {
        var dataPost = req.body;        
        var password = hashPassword(dataPost.password).then(function(hashPass) {
            dataPost.password = hashPass;
            var result = employee.employeeInsert(req, dataPost, _).then(function(result) {
                res.json(result);
            }).catch(function(error) {
                res.send('Error: ' + error);
            });
        }).catch(function(error) {
            res.send('Error: ' + error);
        });        
    })

    app.post('/api/employee/update', function(req, res) {
        var dataPost = req.body;        

        if(dataPost.password == ""){
            var result = employee.employeeUpdate(req, dataPost, _).then(function(result) {
                res.json(result);
            }).catch(function(error) {
                res.send('Error: ' + error);
            });
        }else{
            var password = hashPassword(dataPost.password).then(function(hashPass) {
                dataPost.password = hashPass;
                var result = employee.employeeUpdate(req, dataPost, _).then(function(result) {
                    res.json(result);
                }).catch(function(error) {
                    res.send('Error: ' + error);
                });
            }).catch(function(error) {
                res.send('Error: ' + error);
            });        
        }
    })

    app.post('/api/employee/delete', function(req, res) {
        var dataPost = req.body;        
        var result = employee.employeeDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/employee/detail', function(req, res) {
        var dataPost = req.body;        
        var result = employee.employeeDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })
    
    async function hashPassword (password) {

        const saltRounds = 10;      
        const hashedPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, function(err, hash) {
                if (err) reject(err)
                resolve(hash)
            });
        })
      
        return hashedPassword;
    }
}
