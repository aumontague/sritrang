'use strict';

var fs = require('fs');
const _ = require('lodash');

var con_login = require('../models/login.js');
var login = new con_login.login();
const bcrypt = require('bcrypt');
// const localStorage = require("localStorage")

module.exports = (app) => {

    app.post('/api/userLogin', function(req, res) {
        var dataPost = req.body;
        var password = hashPassword(dataPost.password).then(function(hashPass) {
            var checkUser = login.checkUser(req, dataPost, _).then(function(result) {
                var pass = checkPassword(dataPost.password,result[0]['Password']).then(function(status) {
                    if(status == true){
                        var insLog = login.insLogLogin(req, dataPost, _, result[0]).then(function(resp) {
                            var data = {
                                "code"      : 200,
                                "status"    : true,
                                "data"      : result[0],
                                "token"      : resp
                            }
                            res.json(data);
                        }).catch(function(error) {
                            res.send('Error: ' + error);
                        });
                    }else{
                        res.send('Login Fail');
                    }
                }).catch(function(error) {
                    res.send('Error: ' + error);
                });
            }).catch(function(error) {
                res.send('Error: ' + error);
            });
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

    async function checkPassword(password, passwordDB) {
    
        const match = await bcrypt.compare(password, passwordDB);
        
        if(match) {
            return true;
            //login
        }
    
        return false;
    }

}
