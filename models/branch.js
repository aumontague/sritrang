var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');

class branch {

    constructor(){
        this.db = Database;
    }

    branchList(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT b.BranchId, b.BranchNo, b.BranchName, c.CompanyName FROM Branch b INNER JOIN Company c ON b.CompanyId = c.CompanyId WHERE b.Status = ? ORDER BY b.CreateDate DESC'
            this.db.query(_query, ['1']) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    BranchInformationDetail(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'select * from Branch where BranchId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp[0])
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    branchInsertInformation(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'INSERT INTO Branch(BranchId, BranchNo, BranchName, BranchAddress, BranchMobile, BranchFax, CompanyId, Remark, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.no, dataPost.name, dataPost.address, dataPost.phone, dataPost.fax, dataPost.companyId, dataPost.remark, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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

    branchUpdateInformation(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'UPDATE Branch SET BranchName = ?, BranchNo = ?, BranchAddress = ?, CompanyId = ?, BranchMobile = ?, BranchFax = ?, Remark = ?, Status = ?, ModID = ?, ModDate = ? WHERE BranchId = ?'
            this.db.query(_query, [dataPost.name, dataPost.no, dataPost.address, dataPost.companyId, dataPost.phone, dataPost.fax, dataPost.remark, dataPost.status, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id]) 
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

    branchWarehouseList(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM Warehouse where Status = ? and BranchId = ?'
            this.db.query(_query, [1, dataPost.branchId]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    branchWarehouseDetail(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM Warehouse where WarehouseId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    branchInsertWarehouse(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO Warehouse(WarehouseId, BranchId, WarehouseName, WarehouseNo, Status, Remark, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.branchId, dataPost.name, dataPost.no, dataPost.status, dataPost.remark, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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

    branchUpdateWarehouse(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'Update Warehouse SET BranchId = ?, WarehouseName = ?, WarehouseNo = ?, Remark = ?, Status = ?, ModID = ?, ModDate = ? WHERE WarehouseId = ?'
            this.db.query(_query, [dataPost.branchId, dataPost.name, dataPost.no, dataPost.remark, dataPost.status, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id]) 
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

    branchDeleteWarehouse(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'DELETE FROM Warehouse WHERE WarehouseId = ?'
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

    branchDelete(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'DELETE FROM Branch WHERE BranchId = ?'
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
exports.branch = branch;
