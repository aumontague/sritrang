var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');

class master {

    constructor(){
        this.db = Database;
    }

    masterCompany(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'SELECT * FROM Company WHERE Status = 1'
            this.db.query(_query) 
            .then(resp => {
                var result = {
                    "status"    : true,
                    "code"      : 200,
                    "data"      : resp
                }
                resolve(result);
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    masterBranch(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'SELECT * FROM Company WHERE Status = 1'
            this.db.query(_query) 
            .then(resp => {
                var result = {
                    "status"    : true,
                    "code"      : 200,
                    "data"      : resp
                }
                resolve(result);
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    masterDepartment(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'SELECT * FROM Department WHERE Status = 1'
            this.db.query(_query) 
            .then(resp => {
                var result = {
                    "status"    : true,
                    "code"      : 200,
                    "data"      : resp
                }
                resolve(result);
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    masterRole(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'SELECT * FROM Role WHERE Status = 1'
            this.db.query(_query) 
            .then(resp => {
                var result = {
                    "status"    : true,
                    "code"      : 200,
                    "data"      : resp
                }
                resolve(result);
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    masterCountry(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'SELECT * FROM Country WHERE Status = 1'
            this.db.query(_query) 
            .then(resp => {
                var result = {
                    "status"    : true,
                    "code"      : 200,
                    "data"      : resp
                }
                resolve(result);
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    masterLocation(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'SELECT * FROM Location WHERE Status = 1'
            this.db.query(_query) 
            .then(resp => {
                var result = {
                    "status"    : true,
                    "code"      : 200,
                    "data"      : resp
                }
                resolve(result);
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }


}
exports.master = master;
