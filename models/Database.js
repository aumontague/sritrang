'use strict';

const env = require('./../config/env.json')
var mysql = require('mysql2')

class Database {

    constructor( config ) {
        if(!this.connection){
            this.connection = mysql.createPool(config);
        }
    }
    
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.getConnection((err, conn) => {
                if(err){
                    // err = {
                    //     status : false,
                    //     message : err
                    // }
                    return reject( err );
                }else{
                    conn.query( sql, args, ( err, rows ) => {
                        conn.release()
                        if ( err ) {
                            // err = {
                            //     status : false,
                            //     message : 'ERR_BAD_REQUEST'
                            // }
                            return reject( err );
                        }else{
                            resolve( rows );
                        }
                    });
                }
            })
        });
    }
}

module.exports = new Database(env.mysql)