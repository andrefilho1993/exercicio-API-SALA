'use strict'

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => {
    class Dependentes extends Model { } 

    Dependentes.init({        
        nome: DataTypes.STRING(50),
        idade: DataTypes.INTEGER,
        tipo: DataTypes.STRING(20),
        status_dep: DataTypes.STRING(20),
        id_funcionario: DataTypes.INTEGER,     
    },
        {
            sequelize,
            modelName: 'dependentes', 
            timestamps: false,
        });

        return Dependentes;
}