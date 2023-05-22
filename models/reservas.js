'use strict'

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => {
    class Reservas extends Model { } 

    Reservas.init({        
        data_entrada: DataTypes.DATE,
        data_saida: DataTypes.DATE,
        duracao: DataTypes.SMALLINT,
        valor_parcial: DataTypes.DECIMAL(8,2),
        id_quarto: DataTypes.SMALLINT,    
    },
        {
            sequelize,
            modelName: 'reservas', 
            timestamps: false,
        });

        return Reservas;
}