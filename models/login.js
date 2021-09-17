var moment  = require('moment');
var jwt     = require('jsonwebtoken');
const Database = require('./Database');
const _ = require('lodash');
var uuid = require('uuid');

class login {

  constructor(){
      this.db = Database;
  }

  checkLogin(req, dataPost, _) {
    return new Promise((resolve, reject) => { 
        var _query = 'select * from Employee where Userlogin = ? and Password = ?';
        this.db.query(_query, [dataPost.username, dataPost.password]) 
        .then(resp => {
          const payload = {
              id: resp[0]['EmpId']
          }
          const secret = "tokenSritrang";
          const options = {
              expiresIn: '1h'
          }

          var token = jwt.sign(payload, secret, options);
          var _queryIns = 'INSERT INTO loglogin (logId, empId, AccessToken, RefreshToken, Status) VALUES(?,?,?,?,?)';
          this.db.query(_queryIns, [uuid.v4(), resp[0]['EmpId'], token, 'RefreshToken', 'Y'])
            .then( result => {
              resp[0].token = token
              resolve(resp[0])
            }).catch(err => {
              reject({"status" : false})
              console.log(err);
          }) 

        }).catch(err => {
            reject({"status" : false})
            console.log(err);
        }) 
    });
  }
}
exports.login = login;
