const express = require('express');

const router = express.Router();

const quartosController = require('../controllers/quartos');

router.get('/', (req, res) => {
    quartosController.getAll(req, res)
});

router.get('/:id', (req, res) => {
    quartosController.get(req, res)
});

router.post('/', (req, res) => {
    quartosController.create(req, res)
});

router.put('/:id', (req, res) => {
    quartosController.update(req, res)
});

router.delete('/:id', (req, res) => {
    quartosController.delete(req, res)
});

module.exports = router;