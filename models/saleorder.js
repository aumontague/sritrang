var uuid = require('uuid');
var moment = require('moment');
const Database = require('./Database');
const { reject } = require('lodash');

class saleorder {

    constructor(){
        this.db = Database;
    }

    saleorderList(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT so.SoNumber, so.EtdPol, so.EtdCloseingDate, so.ShippingBookingNo, so.ShipperInvoiceNo, so.Status, c.CustomerName FROM SalesOrder so INNER JOIN Customer c ON so.CustomerId = c.CustomerId WHERE so.Status = 1 ORDER BY so.CreateDate DESC'
            this.db.query(_query) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    saleorderDetails(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'SELECT * FROM SalesOrder WHERE SoId = ?'
            this.db.query(_query, [dataPost.id]) 
            .then(resp => {
                resolve(resp)
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }

    saleorderInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO SalesOrder(SoId, SoNumber, CustomerId, QuotationId, ShipperInvoiceNo, ShipperRefNo, ShippedSiNo, ContainerTypeId, Qty, EtdPol, EtdCloseingDate, EtdCloseingTime, ShippingBookingNo, ShippingLinersId, ShippingFreightForwarderId, ShippingContainerReqCheck, ShippingContainerRequired, ShippingCommodityId, ShippingPackaging, ShippingGrade, ShippingApply, FreePoLDet, FreePoLDem, FreePoLCom, PickupChoose, PickupEmpty, PickupFirst, PickupDepotsId, PickupVoyageNo, PickupMt, ReturnDate, TerminalId, CountryId, PortofDischarge, PodTerminal, FirstVessel, FirstTranshipment, SecondVessel, SecondTranshipment, ThirdVessel, ThirdTranshipment, EtaPod, FreightTerms, IncoTerms, ConsigTime, CutOffSl, CutOffVgm, Fumigation, PhytoCert, Status, CreateId, CreateDate, DocMt, DocCntr, DocInv, DocExport, DocSi, DocVmg, DocCarco) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.no, dataPost.cusId, dataPost.quotationId, dataPost.shipperInvoiceNo, dataPost.shipperRefNo, dataPost.shipperSiNo, dataPost.containerId, dataPost.qty, dataPost.etdPol, dataPost.etdCloseingDate, dataPost.etdCloseingTime, dataPost.shippingBookingNo, dataPost.shippingLinerId, dataPost.shippingFreightForId, dataPost.shippingContainerReqCheck, dataPost.shippingContainerRequired, dataPost.shippingCommoityId, dataPost.shippingPackaging, dataPost.shippingGrade, dataPost.shippingApply, dataPost.freePolDet, dataPost.freePolDem, dataPost.freePolCom, dataPost.pickupChoose, dataPost.pickupEmpty, dataPost.pickupFirst, dataPost.pickupDepotsId, dataPost.pickupVoyageNo, dataPost.pickupMt, dataPost.returnDate, dataPost.terminalId,  dataPost.countryId, dataPost.portofDischarge, dataPost.podTerminal, dataPost.firstVessel, dataPost.firstTranshipment, dataPost.secondVessel, dataPost.secondTranshipment, dataPost.thirdVessel, dataPost.thirdTranshipment, dataPost.etaPod, dataPost.freightTerms, dataPost.incoTerms, dataPost.consigTime, dataPost.cutOffSl, dataPost.cutOffVgm, dataPost.fumigation, dataPost.phytoCert, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.docMt, dataPost.docCntr, dataPost.docInv, dataPost.docExport, dataPost.docSi, dataPost.docVmg, dataPost.docCarco]) 
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

    saleorderUpdate(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'UPDATE SalesOrder SET CustomerId = ?, QuotationId = ?, ShipperInvoiceNo = ?, ShipperRefNo = ?, ShippedSiNo = ?, ContainerTypeId = ?, Qty = ?, EtdPol = ?, EtdCloseingDate = ?, EtdCloseingTime = ?, ShippingBookingNo = ?, ShippingLinersId = ?, ShippingFreightForwarderId = ?, ShippingContainerReqCheck = ?, ShippingContainerRequired = ?, ShippingCommodityId = ?, ShippingPackaging = ?, ShippingGrade = ?, ShippingApply = ?, FreePoLDet = ?, FreePoLDem = ?, FreePoLCom = ?, PickupChoose = ?, PickupEmpty = ?, PickupFirst = ?, PickupDepotsId = ?, PickupVoyageNo = ?, PickupMt = ?, ReturnDate = ?, TerminalId = ?, CountryId = ?, PortofDischarge = ?, PodTerminal = ?, FirstVessel = ?, FirstTranshipment = ?, SecondVessel = ?, SecondTranshipment = ?, ThirdVessel = ?, ThirdTranshipment = ?, EtaPod = ?, FreightTerms = ?, IncoTerms = ?, ConsigTime = ?, CutOffSl = ?, CutOffVgm = ?, Fumigation = ?, PhytoCert = ?, Status = ?, ModID = ?, ModDate = ?, DocMt = ?, DocCntr = ?, DocInv = ?, DocExport = ?, DocSi = ?, DocVmg = ?, DocCarco = ? WHERE SoId = ?'
            var value = [
                dataPost.cusId, dataPost.quotationId, dataPost.shipperInvoiceNo, dataPost.shipperRefNo, dataPost.shipperSiNo, dataPost.containerId, dataPost.qty, dataPost.etdPol, dataPost.etdCloseingDate, dataPost.etdCloseingTime, dataPost.shippingBookingNo, dataPost.shippingLinerId, dataPost.shippingFreightForId, dataPost.shippingContainerReqCheck, dataPost.shippingContainerRequired, dataPost.shippingCommoityId, dataPost.shippingPackaging, dataPost.shippingGrade, dataPost.shippingApply, dataPost.freePolDet, dataPost.freePolDem, dataPost.freePolCom, dataPost.pickupChoose, dataPost.pickupEmpty, dataPost.pickupFirst, dataPost.pickupDepotsId, dataPost.pickupVoyageNo, dataPost.pickupMt, dataPost.returnDate, dataPost.terminalId,  dataPost.countryId, dataPost.portofDischarge, dataPost.podTerminal, dataPost.firstVessel, dataPost.firstTranshipment, dataPost.secondVessel, dataPost.secondTranshipment, dataPost.thirdVessel, dataPost.thirdTranshipment, dataPost.etaPod, dataPost.freightTerms, dataPost.incoTerms, dataPost.consigTime, dataPost.cutOffSl, dataPost.cutOffVgm, dataPost.fumigation, dataPost.phytoCert, dataPost.status, dataPost.ModId, moment().format("YYYY-MM-DD HH:mm:ss"), dataPost.docMt, dataPost.docCntr, dataPost.docInv, dataPost.docExport, dataPost.docSi, dataPost.docVmg, dataPost.docCarco, dataPost.id 
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

    saleorderMtInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO MtCntrAtCyStl(McacId, SoId, VoyageNo, MtEtaIcdts, MtPickUpdate, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.soId, dataPost.voyNo, dataPost.mtEta, dataPost.mtPick, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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
        })
    }

    saleorderMtDelete(req, dataPost, _) {
        return new Promise((resolve, reject) => { 
            var _query = 'DELETE FROM MtCntrAtCyStl WHERE McacId = ?'
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

    saleorderPlanInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO StuffingPlan(SpId, SoId, SpDate, SpFactory, ContainerTypeId, Qty, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.soId, dataPost.spDate, dataPost.spFactory, dataPost.containerId, dataPost.qty, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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
        })
    }

    saleorderPlanDelete(req, dataPost, _) {b1
        return new Promise((resolve, reject) => { 
            var _query = 'DELETE FROM StuffingPlan WHERE SpId = ?'
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

    saleorderLadenInsert(req, dataPost, _) {
        return new Promise((resolve, reject) => {
            var _query = 'INSERT INTO LadenCntr(LcId, SoId, LcVoyageNo, LadenEtdDate, Choose, Status, CreateId, CreateDate) VALUES (?,?,?,?,?,?,?,?)'
            this.db.query(_query, [uuid.v4(), dataPost.soId, dataPost.voyNo, dataPost.etdDate, dataPost.choose, dataPost.status, dataPost.createId, moment().format("YYYY-MM-DD HH:mm:ss")]) 
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
        })
    }

    saleorderLadenDelete(req, dataPost, _) {b1
        return new Promise((resolve, reject) => { 
            var _query = 'DELETE FROM LadenCntr WHERE LcId = ?'
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
exports.saleorder = saleorder;
