var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');

class company {

    constructor(){
        this.db = Database;
    }

    companyList(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT CompanyCode, CompanyName, Status FROM Company'
            this.db.query(_query) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    companyDetails(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM Company WHERE CompanyId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    companyInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO Company(CompanyId, CompanyNo, CompanyCode, CompanyName, CompanyAddress, CompanyMobile, CompanyFax, Remark, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.no, dataPost.code, dataPost.name, dataPost.address, dataPost.phone, dataPost.fax, dataPost.remark, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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

    companyUpdate(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'UPDATE Company SET CompanyCode = ?, CompanyName = ?, CompanyAddress = ?, Status = ?, CompanyNo = ?, CompanyMobile = ?, CompanyFax = ?, Remark = ?, ModID = ?, ModDate = ? WHERE CompanyId = ?'
            this.db.query(_query, [dataPost.code, dataPost.name, dataPost.address, dataPost.status, dataPost.no, dataPost.phone, dataPost.fax, dataPost.remark, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id]) 
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

    companyDelete(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'DELETE FROM Company WHERE CompanyId = ?'
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
exports.company = company;
