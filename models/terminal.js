var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');

class terminal {

    constructor(){
        this.db = Database;
    }

    terminalList(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT t.TerminalId, t.TerminalNo, t.TerminalName, t.Status, c.CountryName, pp.PolPodName FROM Terminal t INNER JOIN Country c ON t.CountryId = c.CountryId INNER JOIN PolPod pp ON t.PolPodId = pp.PolPodId ORDER BY t.CreateDate DESC'
            this.db.query(_query) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    terminalDetails(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM Terminal WHERE TerminalId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    terminalInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO Terminal(TerminalId, TerminalName, TerminalNo, PolPodId, CountryId, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.name, dataPost.no, dataPost.pol, dataPost.countryId, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
            .then(resp => {
                if(resp.affectedRows > 0){
                    var result = {
                        "status"    : true,
                        "text"      : "Success"
                    }
                    resolve(result)
                }else{
                    var result = {
                        "status"    : false,
                        "text"      : "Fail"
                    }
                    reject(result)
                }
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    terminalUpdate(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'UPDATE Terminal SET TerminalName = ?, TerminalNo = ?, PolPodId = ?, CountryId = ?, Status = ?, ModID = ?, ModDate = ? WHERE TerminalId = ?'
            var value = [
                dataPost.name, dataPost.no, dataPost.pol, dataPost.countryId, dataPost.status, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id 
            ]
            this.db.query(_query, value) 
            .then(resp => {
                if(resp.affectedRows > 0){
                    var result = {
                        "status"    : true,
                        "text"      : "Success"
                    }
                    resolve(result)
                }else{
                    var result = {
                        "status"    : false,
                        "text"      : "Fail"
                    }
                    reject(result)
                }
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    terminalDelete(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'DELETE FROM Terminal WHERE TerminalId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                if(resp.affectedRows > 0){
                    var result = {
                        "status"    : true,
                        "text"      : "Success"
                    }
                    resolve(result)
                }else{
                    var result = {
                        "status"    : false,
                        "text"      : "Fail"
                    }
                    reject(result)
                }
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }


}
exports.terminal = terminal;
