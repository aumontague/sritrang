var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');

class customer {

    constructor(){
        this.db = Database;
    }

    customerList(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'select * from Customer where Status = ?'
            this.db.query(_query, ['Y']) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    customerInformation(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'select * from Customer where CustomerId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp[0])
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    customerInsertInformation(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'INSERT INTO Customer(CustomerId, CustomerName, CustomerCode, CustomerEmail, CustomerAddress, CustomerContract, CustomerMobile, CustomerFax, Remark, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.name, dataPost.code, dataPost.email, dataPost.address, dataPost.contract, dataPost.phone, dataPost.fax, dataPost.remark, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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

    customerUpdateInformation(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'UPDATE Customer SET CustomerName = ?, CustomerCode = ?, CustomerEmail = ?, CustomerAddress = ?, CustomerContract = ?, CustomerMobile = ?, CustomerFax = ?, Remark = ?, Status = ?, ModID = ?, ModDate = ?  WHERE CustomerId = ?'
            this.db.query(_query, [dataPost.name, dataPost.code, dataPost.email, dataPost.address, dataPost.contract, dataPost.phone, dataPost.fax, dataPost.remark, dataPost.status, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id]) 
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

    customerFactory(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM Factory where Status = ? and CustomerId = ?'
            this.db.query(_query, ['Y', dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    customerInsertFactory(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO Factory(FactoryId, CustomerId, FactoryCode, FactoryAddress, FactoryMobile, FactoryFax, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.cusId, dataPost.code, dataPost.address, dataPost.phone, dataPost.fax, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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

    customerUpdateFactory(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'Update Factory SET CustomerId = ?, FactoryCode = ?, FactoryAddress = ?, FactoryMobile = ?, FactoryFax = ?, Status = ?, ModID = ?, ModDate = ? WHERE FactoryId = ?'
            this.db.query(_query, [dataPost.cusId, dataPost.code, dataPost.address, dataPost.phone, dataPost.fax, dataPost.status, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id]) 
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

    customerDeleteFactory(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'DELETE FROM Factory WHERE FactoryId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                var result = {
                    "status"    : true,
                    "text"      : "Delete Success."
                }
                resolve(result);
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    customerDelete(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'DELETE FROM Customer WHERE CustomerId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                var result = {
                    "status"    : true,
                    "text"      : "Delete Success."
                }
                resolve(result);
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

}
exports.customer = customer;
