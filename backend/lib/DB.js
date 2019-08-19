'use strict'
const {Sequelize} = require('sequelize');
const SEQUELIZE =  new Sequelize(`${process.env.DB_DATABASE}`,`${process.env.DB_USER}`,`${process.env.DB_PASS}`,{
    host : `${process.env.DB_HOST}`,
    dialect : 'mysql'
});

(async ()=>{
    try{
        await SEQUELIZE.authenticate()
    }catch(e){
        console.log('Error DB: ',e.message);
        await SEQUELIZE.close();
    }
})();

module.exports = SEQUELIZE;