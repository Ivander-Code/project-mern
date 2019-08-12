'use strict';

const PATH = require('path');
const personCtrl = require(PATH.join(process.env.APP_PATH,'/backend/src/controllers/PersonController'));
const { Router } = require('express');
const ROUTER = Router();
let result = '';

ROUTER.get('/', async(req, res) => {
    result = await personCtrl.getAllPersons();
    res.json(result);
});

ROUTER.post('/new_record', async(req, res) =>{
    result = await personCtrl.storeNewPerson(req.body);
    res.json(result);

});

ROUTER.delete('/delete_record/:id',async (req, res)=>{
    result = await personCtrl.deletePersonById(req.params.id);
    res.json(result);
});

ROUTER.put('/update_record',async (req,res)=>{
    result = await personCtrl.updatePersonById(req.body);
    res.json(result);
});
module.exports = ROUTER;