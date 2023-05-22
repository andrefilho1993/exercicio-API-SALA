const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Reservas = require('../models/reservas');
const { get } = require('../routes/reservasRoute');

module.exports = {

    async getAll(req, res) {
        const reservas = await Reservas(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(reservas)
    },

    async get(req, res) {
        const reservas = await Reservas(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(reservas)
    },

    async create(req, res) {
        const reservas = await Reservas(sequelize, Sequelize.DataTypes).create({
            data_entrada: req.body.data_entrada,
            data_saida: req.body.data_saida,
            duracao: req.body.duracao,
            valor_parcial: req.body.valor_parcial,
            id_quarto: req.body.id_quarto
        })
        res.status(201).send({
            message: "Reserva cadastrado com sucesso."
        })
    },

    async update(req, res) {
        const reservas = await Reservas(sequelize, Sequelize.DataTypes).update({
            data_entrada: req.body.data_entrada,
            data_saida: req.body.data_saida,
            duracao: req.body.duracao,
            valor_parcial: req.body.valor_parcial,
            id_quarto: req.body.id_quarto
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: "Reserva atualizada com sucesso."
        })
    },

    async delete(req, res) {
        await Reservas(sequelize,Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: "Reserva excluída com sucesso."
        })
    }
}