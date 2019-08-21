'use strict'
const {Schema, model} = require('mongoose');
const PERSON = new Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
        allowNull: false
    },
    apellido1:{
        type: String,
        required: true,
        trim: true
    },
    apellido2:{
        type: String,
        required: true,
        trim: true
    },
    age:{
        type: Number,
        required: true
    },
    active:{
        type: Number,
        default: 1,
        required: false
    }
},{
    timestamps: true,
    collection: 'person'
});

module.exports = model('Person', PERSON);

