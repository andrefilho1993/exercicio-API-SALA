const express = require('express');

const router = express.Router();

const projetoController = require('../controllers/projeto');

router.get('/', (req, res) => {
    projetoController.getAll(req, res)
});

router.get('/:id', (req, res) => {
    projetoController.get(req, res)
});

router.post('/', (req, res) => {
    projetoController.create(req, res)
});

router.put('/:id', (req, res) => {
    projetoController.update(req, res)
});

router.delete('/:id', (req, res) => {
    projetoController.delete(req, res)
});

module.exports = router;