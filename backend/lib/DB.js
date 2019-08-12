'use strict'

const MYSQL = require('mysql');
const PATH = require('path');
const CONFIG = require(PATH.join(process.env.APP_PATH,'/backend/config/dbConfig'));

class DB {

    constructor(){
        this.connection = MYSQL.createConnection(CONFIG);
    }

    static getInstance(){
        return new DB();
    }

    query(sql, args = ''){
        return(
            new Promise((resolve, reject) => {
                this.connection.query(sql, args,(error,result,fields)=>{
                    return (error)? reject(error) : resolve(result);
                });
            })
        );
    }
}

module.exports = DB;