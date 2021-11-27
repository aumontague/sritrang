var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');

class tagerror {

    constructor(){
        this.db = Database;
    }

    TagErrorList(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM TagError WHERE SoId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    TagErrorInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO TagError(TagId, RefTagId, Remark, SoId, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.refTagId, dataPost.remark, dataPost.soId, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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
exports.tagerror = tagerror;
