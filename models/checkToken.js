var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');

class checkToken {

    constructor(){
        this.db = Database;
    }

    checkTokenUser(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            console.log(dataPost);
            var _query = 'SELECT * FROM loglogin WHERE empId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

}
exports.checkToken = checkToken;
