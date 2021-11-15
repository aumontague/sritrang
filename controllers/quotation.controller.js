'use strict';

var fs = require('fs');
const _ = require('lodash');
var moment = require('moment');

var con_quotation = require('../models/quotation.js');
var quotation = new con_quotation.quotation();

var con_check = require('../models/check.js');
var checkNo = new con_check.checkvalue();

module.exports = (app) => {

    app.get('/api/quotation/list', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/quotation/create', function(req, res) {
        var dataPost = req.body;     
        const table = "Quotation";
        const col = "QuotationNo";
        var QuotationNo = "QT";
        
        checkNo.checkQuotationNo(req, dataPost, _).then(function(result) {
            if(result.status == false){
                var year = moment().year()+543;
                var month = moment().format("MM");
                var miniYear = year.toString().substr(2,4);
                QuotationNo = QuotationNo + miniYear + month + '0001';
                dataPost.no = QuotationNo
                var result1 = quotation.quotationInsert(req, dataPost, _).then(function(resp) {
                    res.json(resp);
                }).catch(function(error) {
                    res.send('Error: ' + error);
                });   
            }else{
                var year = moment().year()+543;
                var month = moment().format("MM");
                var miniYear = year.toString().substr(2,4);
                var miniQTDB = result.data.QuotationNo.substr(2,4);

                var miniQT = miniYear+month
                if(miniQTDB == miniQT){
                    var num = result.data.QuotationNo.substr(6,9);
                    var noQT = "";
                    num++;
                    noQT = pad(num, 4);
                    QuotationNo = QuotationNo + miniQTDB + noQT;
                    dataPost.no = QuotationNo;
                    var result1 = quotation.quotationInsert(req, dataPost, _).then(function(resp) {
                        res.json(resp);
                    }).catch(function(error) {
                        res.send('Error: ' + error);
                    });   
                }else{
                    QuotationNo = QuotationNo + miniQT + '0001';
                    dataPost.no = QuotationNo
                    var result1 = quotation.quotationInsert(req, dataPost, _).then(function(resp) {
                        res.json(resp);
                    }).catch(function(error) {
                        res.send('Error: ' + error);
                    });   
                }
            }
        }).catch(function(error) {
            res.send('Error: ' + error);
        }); 
    })

    app.post('/api/quotation/update', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        }); 
    })

    app.post('/api/quotation/delete', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/quotation/detail', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationDetails(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/quotation/detail/list', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationDetailList(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });
    })

    app.post('/api/quotation/detail/create', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationDetailInsert(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/quotation/detail/update', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationDetailUpdate(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/quotation/detail/delete', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationDetailDelete(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    app.post('/api/quotation/detail/detail', function(req, res) {
        var dataPost = req.body;        
        var result = quotation.quotationDetailDetail(req, dataPost, _).then(function(result) {
            res.json(result);
        }).catch(function(error) {
            res.send('Error: ' + error);
        });       
    })

    // app.post('/api/quotation/duplicate', function(req, res) {
    //     var dataPost = req.body;        
    //     var data = [];
    //     var dataDetail = quotation.quotationDetails(req, dataPost, _).then(function(result) {
    //         data.quotation = result[0];
    //         var dataDetailList = quotation.quotationDetailList(req, dataPost, _).then(function(resList) {
    //             data.quotation.detail = resList;
    //             var insQuotation = quotation.quotationDuplicate(req, dataPost, _, data).then(function(resp) {
    //                 // res.json(resp);
    //             }).catch(function(error) {
    //                 res.send('Error: ' + error);
    //             }); 
    //         }).catch(function(error) {
    //             res.send('Error: ' + error);
    //         });     
    //     }).catch(function(error) {
    //         res.send('Error: ' + error);
    //     });
    // })
    
    function pad (str, max) {
        str = str.toString();
        return str.length < max ? pad("0" + str, max) : str;
    }
}
