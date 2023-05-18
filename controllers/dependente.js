const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Dependentes = require('../models/dependente');
const { get } = require('../routes/dependenteRoute');

module.exports = {

    async getAll(req, res) {
        const dependentes = await Dependentes(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(dependentes)
    },

    async get(req, res) {
        const dependentes = await Dependentes(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(dependentes)
    },

    async create(req, res) {
        const dependentes = await Dependentes(sequelize, Sequelize.DataTypes).create({
            nome: req.body.nome,
            idade: req.body.idade,
            tipo: req.body.tipo,
            status_dep: req.body.status_dep,
            id_funcionario: req.body.id_funcionario
        })
        res.status(201).send({
            message: "Dependente cadastrado com sucesso."
        })
    },

    async update(req, res) {
        const dependentes = await Dependentes(sequelize, Sequelize.DataTypes).update({
            nome: req.body.nome,
            idade: req.body.idade,
            tipo: req.body.tipo,
            status_dep: req.body.status_dep,
            id_funcionario: req.body.id_funcionario
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: "Dependente atualizado com sucesso."
        })
    },

    async delete(req, res) {
        await Dependentes(sequelize,Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: "Dependente excluído com sucesso."
        })
    }
}