var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');

class workorder {

    constructor(){
        this.db = Database;
    }

    workorderList(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT wo.WorkOrderId, wo.WorkOrderNo, c.CustomerName FROM WorkOrder wo INNER JOIN Customer c ON wo.CustomerId = c.CustomerId'
            this.db.query(_query) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    workorderDetails(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM WorkOrder WHERE WorkOrderId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    workorderInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO WorkOrder(WorkOrderId, WorkOrderNo, CustomerId, AssignDate, BookingNo, FactoryId, EtdPol, ClosingDate, ClosingTime, PickupDate, LadenEtd, FreetimeDet, FreetimeDem, FreetimeCom, FreetimeFrom, FreetimeTo, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.workorderNo, dataPost.cusId, dataPost.assDate, dataPost.bookingNo, dataPost.factoryId, dataPost.etdPol, dataPost.closeingDate, dataPost.closeingTime, dataPost.pickupDate, dataPost.ladenEtd, dataPost.det, dataPost.dem, dataPost.com, dataPost.freetimeFrom, dataPost.freetimeTo, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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

    workorderUpdate(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'UPDATE WorkOrder SET WorkOrderNo = ?, CustomerId = ?, AssignDate = ?, BookingNo = ?, FactoryId = ?, EtdPol = ?, ClosingDate = ?, ClosingTime = ?, PickupDate = ?, LadenEtd = ?, FreetimeDet = ?, FreetimeDem = ?, FreetimeCom = ?, FreetimeFrom = ?, FreetimeTo = ?, Status = ?, ModId = ?, ModDate = ? WHERE WorkOrderId = ?'
            var value = [
                dataPost.workorderNo, dataPost.cusId, dataPost.assDate, dataPost.bookingNo, dataPost.factoryId, dataPost.etdPol, dataPost.closeingDate, dataPost.closeingTime, dataPost.pickupDate, dataPost.ladenEtd, dataPost.det, dataPost.dem, dataPost.com, dataPost.freetimeFrom, dataPost.freetimeTo, dataPost.status, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id
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

    // workorderDelete(req, dataPost, _) {
    //     return new Promise((resolve, reject) => {
    //         var _query = 'DELETE FROM WorkOrder WHERE WorkOrderId = ?'
    //         this.db.query(_query, [dataPost.id]) 
    //         .then(resp => {
    //             if(resp.affectedRows > 0){
    //                 var result = {
    //                     "status"    : true,
    //                     "text"      : "Success"
    //                 }
    //                 resolve(result)
    //             }else{
    //                 var result = {
    //                     "status"    : false,
    //                     "text"      : "Fail"
    //                 }
    //                 reject(result)
    //             }
    //         }).catch(err => {
    //             reject({"status" : false})
    //             console.log(err);
    //         }) 
    //     });
    // }


}
exports.workorder = workorder;
