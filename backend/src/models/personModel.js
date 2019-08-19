'use strict'
const PATH = require('path');
const {Sequelize} = require('sequelize');
const SEQUELIZE = require(PATH.join(process.env.APP_PATH,'/backend/lib/DB'));

const PERSON = SEQUELIZE.define('persona',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido1:{
        type : Sequelize.STRING,
        allowNull : false
    },
    apellido2:{
        type: Sequelize.STRING,
        allowNull: false
    },
    dep:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    active:{
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1
    },

},{
    freezeTableName: true,
    timestamps: false
});

module.exports = PERSON;