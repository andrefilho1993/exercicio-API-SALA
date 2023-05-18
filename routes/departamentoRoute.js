const express = require('express');

const router = express.Router();

const departamentoController = require('../controllers/departamento');

router.get('/', (req, res) => {
    departamentoController.getAll(req, res)
});

router.get('/:id', (req, res) => {
    departamentoController.get(req, res)
});

router.post('/', (req, res) => {
    departamentoController.create(req, res)
});

router.put('/:id', (req, res) => {
    departamentoController.update(req, res)
});

router.delete('/:id', (req, res) => {
    departamentoController.delete(req, res)
});

module.exports = router;