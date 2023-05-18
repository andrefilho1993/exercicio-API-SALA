const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Departamentos = require('../models/departamento');
const { get } = require('../routes/departamentoRoute');

module.exports = {

    async getAll(req, res) {
        const departamentos = await Departamentos(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(departamentos)
    },

    async get(req, res) {
        const departamentos = await Departamentos(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(departamentos)
    },

    async create(req, res) {
        const departamento = await Departamentos(sequelize, Sequelize.DataTypes).create({
            cpf: req.body.cpf,
            nome: req.body.nome,
            endereco: req.body.endereco,
            bairro: req.body.bairro,
            complemento: req.body.complemento,
            cep: req.body.cep,
            cidade: req.body.cidade,
            telefone: req.body.telefone
        })
        res.status(201).send({
            message: "Departamento cadastrado com sucesso."
        })
    },

    async update(req, res) {
        const departamento = await Departamentos(sequelize, Sequelize.DataTypes).update({        
            nome: req.body.nome,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            cargo: req.body.cargo,
            salario: req.body.salario,
            id_departamento: req.body.id_departamento
         
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: "Departamento atualizado com sucesso."
        })
    },

    async delete(req, res) {
        await Departamentos(sequelize,Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: "Departamento excluído com sucesso."
        })
    }
}