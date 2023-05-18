const Sequelize = require('sequelize');
const sequelize = require('../db/db');
const Projetos = require('../models/projeto');
const { get } = require('../routes/projetoRoute');

module.exports = {

    async getAll(req, res) {
        const projeto = await Projetos(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(projeto)
    },

    async get(req, res) {
        const projeto = await Projetos(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(projeto)
    },

    async create(req, res) {
        const projeto = await Projetos(sequelize, Sequelize.DataTypes).create({
            nome_projeto: req.body.nome_projeto,
            tipo_projeto: req.body.tipo_projeto,
            custo: req.body.custo,
        })
        res.status(201).send({
            message: "Projeto cadastrado com sucesso."
        })
    },

    async update(req, res) {
        const projeto = await Projetos(sequelize, Sequelize.DataTypes).update({        
            nome_projeto: req.body.nome_projeto,
            tipo_projeto: req.body.tipo_projeto,
            custo: req.body.custo,
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: "Projeto atualizado com sucesso."
        })
    },

    async delete(req, res) {
        await Projetos(sequelize,Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: "Projeto excluído com sucesso."
        })
    }
}