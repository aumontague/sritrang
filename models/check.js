const Database = require('./Database');

class checkvalue {
    
    constructor(){
        this.db = Database;
    }

    checkNo(req, dataPost, _, table, col){
        return new Promise((resolve, reject) => {
            var _query = 'SELECT 1 FROM '+table+' WHERE '+col+' = ?';
            this.db.query(_query, [dataPost.no]) 
            .then(resp => {
                if(resp == ""){
                    var result = {
                        "code"      : 200,
                        "status"    : true,
                        "text"      : "Success"
                    }
                    resolve(result)
                }else{
                    var result = {
                        "code"      : 200,
                        "status"    : false,
                        "text"      : col+" already uesd."
                    }
                    resolve(result)
                }
            }).catch(err => {
                reject({"status" : false})
                console.log(err);
            }) 
        });
    }
}

exports.checkvalue = checkvalue;