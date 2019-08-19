'use strict'

const PATH = require('path');
const PERSON = require(PATH.join(process.env.APP_PATH,'/backend/src/models/personModel'));
let personController = {};

personController.getAllPersons = async (req, res) => {
    let result = await personController.exceute('get');
    res.send(result);
};
personController.storeNewPerson = async  (req, res) =>{
    let result = await personController.exceute('store', req);
    res.json(result);
};
personController.deletePersonById = async (req, res)=>{
    let result = await  personController.exceute('delete',req);
    res.json(result);
};
personController.updatePersonById = async (req,res)=>{
    let result = await personController.exceute('update',req);
    res.json(result);
};
personController.exceute = async(action, req = {})=>{
    let response = {
        data:{},
        message:{
            type:'',
            messageText:''
        }
    }
    try{
        switch (action) {
            default:
            case 'get':
                response.data = await PERSON.findAll({where:{active:1}});
                break;
            case 'store':
                response.data = await PERSON.create(req.body);
                break;
            case 'delete':
                response.data = await PERSON.destroy({where:{id:req.params.id}});
                break;
            case 'update':
                response.data = await PERSON.update(req.body,{where:{id:req.body.id}});
                break;
        }
        response.message.type = 'success';
        response.message.messageText = 'Successful operation';
    }catch(e){
        response.data = {};
        response.message.type = 'error';
        response.message.messageText = `UPS!! Something unexpected happened: ${e.message}`;
    }
    return response;
}

module.exports = personController;
