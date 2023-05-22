const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Quartos = require('../models/quartos');
const { get } = require('../routes/quartosRoute');

module.exports = {

    async getAll(req, res) {
        const quartos = await Quartos(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(quartos)
    },

    async get(req, res) {
        const quartos = await Quartos(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(quartos)
    },

    async create(req, res) {
        const quartos = await Quartos(sequelize, Sequelize.DataTypes).create({
            tipo: req.body.tipo,
            descricao: req.body.descricao,
            valor_diaria: req.body.valor_diaria,
        })
        res.status(201).send({
            message: "Quartos cadastrado com sucesso."
        })
    },

    async update(req, res) {
        const quartos = await Quartos(sequelize, Sequelize.DataTypes).update({
            tipo: req.body.tipo,
            descricao: req.body.descricao,
            valor_diaria: req.body.valor_diaria,
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: "Quartos atualizado com sucesso."
        })
    },

    async delete(req, res) {
        await Quartos(sequelize,Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: "Quartos excluído com sucesso."
        })
    }
}