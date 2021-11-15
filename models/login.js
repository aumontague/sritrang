var moment  = require('moment');
var jwt     = require('jsonwebtoken');
const Database = require('./Database');
const _ = require('lodash');
var uuid = require('uuid');
// const localStorage = require("localStorage");

class login {

  constructor(){
      this.db = Database;
  }

  insLogLogin(req, dataPost, _, getData) {
    return new Promise((resolve, reject) => { 
      const payload = {
          id: getData['EmpId']
      }
      const secret = "sritrang";
      const options = {
          expiresIn: '20d'
      }

      var token = jwt.sign(payload, secret, options);

      var _queryIns = 'INSERT INTO loglogin (logId, empId, AccessToken, RefreshToken, Status, CreateID, CreateDate) VALUES(?,?,?,?,?,?,?)';
      this.db.query(_queryIns, [uuid.v4(), getData['EmpId'], token, 'RefreshToken', 1, getData['EmpId'], moment().format("YYYY-MM-DD HH:mm:ss")])
      .then( result => {
        // localStorage.setItem('token_'+getData['EmpId'], token);
        resolve(token)
      }).catch(err => {
        reject({"status" : false})
        console.log(err);
      }) 
    });
  }

  checkUser(req, dataPost, _){
    return new Promise((resolve, reject) => {
      var _query = 'select * from Employee where Userlogin = ?';
      this.db.query(_query, [dataPost.username])
      .then(resp => {
        resolve(resp);
      }) 
    })
  }
}
exports.login = login;
