const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Departamentos = require('../models/departamento');
const { get } = require('../routes/departamentoRoute');

module.exports = {

    async getAll(req, res) {
        const departamento = await Departamentos(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(departamento)
    },

    async get(req, res) {
        const departamento = await Departamentos(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(departamento)
    },

    async create(req, res) {
        const departamento = await Departamentos(sequelize, Sequelize.DataTypes).create({
            nome: req.body.nome,
            sigla: req.body.sigla,
            responsavel: req.body.responsavel,
        })
        res.status(201).send({
            message: "Departamento cadastrado com sucesso."
        })
    },

    async update(req, res) {
        const departamento = await Departamentos(sequelize, Sequelize.DataTypes).update({
          
            nome: req.body.nome,
            endereco: req.body.endereco,
            bairro: req.body.bairro,
            complemento: req.body.complemento,
            cep: req.body.cep,
            cidade: req.body.cidade,
            telefone: req.body.telefone
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