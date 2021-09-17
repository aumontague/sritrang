var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');

class polpod {

    constructor(){
        this.db = Database;
    }

    polpodList(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT pp.PolPodId, pp.PolPodNo, pp.PolPodName, pp.Status, c.CountryName FROM PolPod pp INNER JOIN Country c ON pp.CountryId = c.CountryId '
            this.db.query(_query) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    polpodDetails(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM PolPod WHERE PolPodId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    polpodInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO PolPod(PolPodId, PolPodName, PolPodNo, CountryId, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.name, dataPost.no, dataPost.countryId, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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

    polpodUpdate(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'UPDATE PolPod SET PolPodName = ?, PolPodNo = ?, CountryId = ?, Status = ?, ModID = ?, ModDate = ? WHERE PolPodId = ?'
            var value = [
                dataPost.name, dataPost.no, dataPost.countryId, dataPost.status, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id 
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

    polpodDelete(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'DELETE FROM PolPod WHERE PolPodId = ?'
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
exports.polpod = polpod;
