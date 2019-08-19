'use strict'

require('../../lib/DB');
const PATH = require('path');
const OBJ_DB = require(PATH.join(process.env.APP_PATH,'/backend/lib/DB'));

class PersonController{
    constructor(){
        this.dbInstance = OBJ_DB.getInstance();
        this.result = {
            data:{},
            message:{
                type:'',
                messageText:''
            }
        };
    }

    async getAllPersons(){
        let qry = 'SELECT * from persona WHERE active = 1';
        let result = await this.excecute(qry);
        return result;
    }

    async storeNewPerson(args){
        let qry = 'INSERT INTO persona SET ?';
        return await this.excecute(qry,args);
    }

    async deletePersonById(value){
        let qry = 'DELETE FROM persona WHERE id = ?';
        return await this.excecute(qry, value);
    }

    async updatePersonById(args){
        let qry = 'UPDATE persona set nombre = ?, apellido1 = ?, apellido2 =? , dep = ? WHERE id =?';
        let {id,nombre,apellido1,apellido2,dep} = args;
        return await this.excecute(qry,[nombre,apellido1,apellido2,dep,id]);
    }

    async excecute(qry, args = {}){
        try{
            this.result.data = await this.dbInstance.query(qry,args);
            this.result.message.type = 'success';
            this.result.message.messageText = 'Successful operation';
        }catch(e){
            this.result.data = {};
            this.result.message.type = 'error';
            this.result.message.messageText = `UPS!! Something unexpected happened: ${e.sqlMessage}`;
        }
        return this.result;
    }
}

module.exports = new PersonController();
