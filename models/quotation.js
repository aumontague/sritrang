var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');

class quotation {

    constructor(){
        this.db = Database;
    }

    // priceList(req, dataPost, _) {
    //     return new Promise((resolve, reject) => {
    //         var _query = 'SELECT p.PriceNo, p.LocationFrom, p.LocationTo, p.Status, e.EmpName, e.EmpLastName, SUM(pd.Amount) FROM Price p INNER JOIN Employee e ON p.CreateId = e.EmpId INNER JOIN PriceDetail pd ON p.PriceId = pd.PriceId ORDER BY p.CreateDate DESC'
    //         this.db.query(_query) 
    //         .then(resp => {
    //             var result = {
    //                 "code"      : 200,
    //                 "status"    : true,
    //                 "data"      : resp,
    //                 "text"      : "Success"
    //             }
    //             resolve(result)
    //         }).catch(err => {
    //             var result = {
    //                 "status"    : false,
    //                 "msg"       : err
    //             }
    //             reject(result)
    //             console.log(err);
    //         }) 
    //     });
    // }

    quotationDetails(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM Quotation WHERE QuotationId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    quotationInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO Quotation(QuotationId, QuotationNo, QuotationDate, CustomerId, FactoryId, Telephone, Fax, Email, ContractName, Remark, QuotationDateFrom, QuotationDateTo, EmpSalesId, LocationFrom, GroupFrom, LocationTo, GroupTo, InternalNote, Status, CreateID, CreateDate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.no, dataPost.quoDate, dataPost.cusId, dataPost.facId, dataPost.tel, dataPost.fax, dataPost.email, dataPost.contractName, dataPost.remark, dataPost.quoDateFrom, dataPost.quoDateTo, dataPost.saleId, dataPost.locationFrom, dataPost.groupFrom, dataPost.locationTo, dataPost.groupTo, dataPost.note, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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

    quotationUpdate(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'UPDATE Quotation SET QuotationNo = ?, QuotationDate = ?, CustomerId = ?, FactoryId = ?, Telephone = ?, Fax = ?, Email = ?, ContractName = ?, Remark = ?, QuotationDateFrom = ?, QuotationDateTo = ?, EmpSalesId = ?, LocationFrom = ?, GroupFrom = ?, LocationTo = ?, GroupTo = ?, InternalNote = ?, Status = ?, ModID = ?, ModDate = ? WHERE QuotationId = ?'
            var value = [
                dataPost.no, dataPost.quoDate, dataPost.cusId, dataPost.facId, dataPost.tel, dataPost.fax, dataPost.email, dataPost.contractName, dataPost.remark, dataPost.quoDateFrom, dataPost.quoDateTo, dataPost.saleId, dataPost.locationFrom, dataPost.groupFrom, dataPost.locationTo, dataPost.groupTo, dataPost.note, dataPost.status, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id 
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

    quotationDelete(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'DELETE FROM Quotation WHERE QuotationId = ?'
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

    // priceDetailList(req, dataPost, _) {
    //     return new Promise((resolve, reject) => {
    //         var _query = 'SELECT * FROM PriceDetail WHERE PriceId = ? ORDER BY CreateDate DESC'
    //         this.db.query(_query, [dataPost.id]) 
    //         .then(resp => {
    //             resolve(resp)
    //         }).catch(err => {
    //             reject({"status" : false})
    //             console.log(err);
    //         }) 
    //     });
    // }

    quotationDetailInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO QuotationDetail(QuotationDetailId, QuotationId, PriceId, ContainnerTypeId, Qty, Amount, Discount, TotalAmount, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.quoId, dataPost.priceId, dataPost.containerId, dataPost.qty, dataPost.amount, dataPost.discount, dataPost.total, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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

    quotationDetailUpdate(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'UPDATE QuotationDetail SET PriceId = ?, ContainnerTypeId = ?, Qty = ?, Amount = ?, Discount = ?, TotalAmount = ?, ModID = ?, ModDate = ? WHERE QuotationDetailId = ?'
            var value = [
                dataPost.priceId, dataPost.containerId, dataPost.qty, dataPost.amount, dataPost.discount, dataPost.total, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id
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

    quotationDetailDelete(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'DELETE FROM QuotationDetail WHERE QuotationDetailId = ?'
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

    quotationDetailDetail(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM QuotationDetail WHERE QuotationDetailId = ?'
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
exports.quotation = quotation;
