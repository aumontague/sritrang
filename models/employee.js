var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');

class employee {

    constructor(){
        this.db = Database;
    }

    employeeList(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM Employee'
            this.db.query(_query) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    employeeDetails(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM Employee WHERE EmpId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    employeeInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO Employee(EmpId, EmpNo, EmpName, EmpAddress, EmpMobile, EmpFax, CompanyId, BranchId, DepartmentId, Userlogin, Password, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.no, dataPost.name, dataPost.address, dataPost.phone, dataPost.fax, dataPost.companyId, dataPost.branch, dataPost.depart, dataPost.userLogin, dataPost.password, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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

    employeeUpdate(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = ""
            var value = []
            if(dataPost.password == ""){
                _query = 'Update Employee SET EmpNo = ?, EmpName = ?, EmpAddress = ?, EmpMobile = ?, EmpFax = ?, CompanyId = ?, BranchId = ?, DepartmentId = ?, Userlogin = ?, ModID = ?, ModDate = ? WHERE EmpId = ?'
                value = [
                    dataPost.no, dataPost.name, dataPost.address, dataPost.phone, dataPost.fax, dataPost.companyId, dataPost.branch, dataPost.depart, dataPost.userLogin, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id
                ]
            }else{
                _query = 'Update Employee SET EmpNo = ?, EmpName = ?, EmpAddress = ?, EmpMobile = ?, EmpFax = ?, CompanyId = ?, BranchId = ?, DepartmentId = ?, Userlogin = ?, Password = ?, ModID = ?, ModDate = ? WHERE EmpId = ?'
                value = [
                    dataPost.no, dataPost.name, dataPost.address, dataPost.phone, dataPost.fax, dataPost.companyId, dataPost.branch, dataPost.depart, dataPost.userLogin, dataPost.password, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.id
                ]
            }
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

    employeeDelete(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'DELETE FROM Employee WHERE EmpId = ?'
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
exports.employee = employee;
