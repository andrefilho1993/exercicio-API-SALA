'use strict'

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => {
    class Quartos extends Model { } 

    Quartos.init({        
        tipo: DataTypes.STRING(25),
        descricao: DataTypes.STRING(100),
        valor_diaria: DataTypes.DECIMAL(6,2)
    },
        {
            sequelize,
            modelName: 'quartos', 
            timestamps: false,
        });

        return Quartos;
}