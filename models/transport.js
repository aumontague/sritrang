var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');

class transport {

    constructor(){
        this.db = Database;
    }

    transportList(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT t.TransportId, t.TransportNo, t.TransportName, t.Status, g.GroupName, c.CompanyName FROM Transport t INNER JOIN GroupShipment g ON t.GroupId = g.GroupId INNER JOIN Company c ON t.CompanyId = c.CompanyId ORDER BY t.CreateDate DESC'
            this.db.query(_query) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    transportDetails(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM Transport WHERE TransportId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    transportInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO Transport(TransportId, TransportName, TransportNo, GroupId, CompanyId, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.name, dataPost.no, dataPost.groupId, dataPost.companyId, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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

    transportUpdate(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'UPDATE Transport SET TransportName = ?, TransportNo = ?, GroupId = ?, CompanyId = ?, Status = ?, ModID = ?, ModDate = ? WHERE TransportId = ?'
            var value = [
                dataPost.name, dataPost.no, dataPost.groupId, dataPost.companyId, dataPost.status, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id 
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

    transportDelete(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'DELETE FROM Transport WHERE TransportId = ?'
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
exports.transport = transport;
