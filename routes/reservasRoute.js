const express = require('express');

const router = express.Router();

const reservasController = require('../controllers/reservas');

router.get('/', (req, res) => {
    reservasController.getAll(req, res)
});

router.get('/:id', (req, res) => {
    reservasController.get(req, res)
});

router.post('/', (req, res) => {
    reservasController.create(req, res)
});

router.put('/:id', (req, res) => {
    reservasController.update(req, res)
});

router.delete('/:id', (req, res) => {
    reservasController.delete(req, res)
});

module.exports = router;