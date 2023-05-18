'use strict'

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => {
    class Projetos extends Model { } 

    Projetos.init({        
        nome_projeto: DataTypes.STRING(50),
        tipo_projeto: DataTypes.STRING(50),
        custo: DataTypes.INTEGER,    
    },
        {
            sequelize,
            modelName: 'projetos', 
            timestamps: false,
        });

        return Projetos;
}