'use strict'

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

module.exports = (sequelize, DataTypes) => {
    class Funcionarios extends Model { } 

    Funcionario.init({        
        nome: DataTypes.STRING(50),
        idade: DataTypes.INTEGER,
        endereco: DataTypes.STRING(20),
        telefone: DataTypes.BIGINT,
        cargo: DataTypes.STRING(25),
        salario: DataTypes.BIGINT,
        id_depto: DataTypes.BIGINT,
    },
        {
            sequelize,
            modelName: 'funcionarios', 
            timestamps: false,
        });

        return Funcionarios;
}