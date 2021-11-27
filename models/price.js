var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');

class price {

    constructor(){
        this.db = Database;
    }

    priceList(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT p.PriceId, p.PriceNo, p.LocationFrom, p.LocationTo, p.Status, e.EmpName, e.EmpLastName, SUM(pd.Amount) FROM Price p INNER JOIN Employee e ON p.CreateId = e.EmpId INNER JOIN PriceDetail pd ON p.PriceId = pd.PriceId ORDER BY p.CreateDate DESC'
            this.db.query(_query) 
            .then(resp => {
                var result = {
                    "code"      : 200,
                    "status"    : true,
                    "data"      : resp,
                    "text"      : "Success"
                }
                resolve(result)
            }).catch(err => {
                var result = {
                    "status"    : false,
                    "msg"       : err
                }
                reject(result)
                console.log(err);
            }) 
        });
    }

    priceDetails(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM Price WHERE PriceId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    priceInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO Price(PriceId, PriceNo, LocationFrom, GroupFrom, LocationTo, GroupTo, PriceDate, ContainerTypeId, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.no, dataPost.from, dataPost.groupFrom, dataPost.to, dataPost.groupTo, dataPost.priceDate, dataPost.typeId, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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

    priceUpdate(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'UPDATE Price SET PriceNo = ?, LocationFrom = ?, GroupFrom = ?, LocationTo = ?, GroupTo = ?, Status = ?, PriceDate = ?, ContainerTypeId = ?, ModID = ?, ModDate = ? WHERE PriceId = ?'
            var value = [
                dataPost.no, dataPost.from, dataPost.groupFrom, dataPost.to, dataPost.groupTo, dataPost.status, dataPost.priceDate, dataPost.typeId, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id 
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

    priceDelete(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'DELETE FROM Price WHERE PriceId = ?'
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

    priceDetailList(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM PriceDetail WHERE PriceId = ? ORDER BY CreateDate DESC'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    priceDetailInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO PriceDetail(PriceDetailId, PriceId, TransportId, Amount, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.priceId, dataPost.tranId, dataPost.amount, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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

    priceDetailUpdate(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'UPDATE PriceDetail SET PriceId = ?, TransportId = ?, Amount = ?, Status = ?, ModID = ?, ModDate = ? WHERE PriceDetailId = ?'
            var value = [
                dataPost.priceId, dataPost.tranId, dataPost.amount, dataPost.status, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id 
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

    priceDetailDelete(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'DELETE FROM PriceDetail WHERE PriceDetailId = ?'
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

    priceDetailDetail(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM PriceDetail WHERE PriceDetailId = ?'
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
exports.price = price;
