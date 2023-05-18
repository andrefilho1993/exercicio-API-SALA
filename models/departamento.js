'use strict'

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => {
    class Departamentos extends Model { } 

    Departamentos.init({        
        nome: DataTypes.STRING(50),
        sigla: DataTypes.STRING(3),
        responsavel: DataTypes.STRING(50),
    },
        {
            sequelize,
            modelName: 'departamentos', 
            timestamps: false,
        });

        return Departamentos;
}