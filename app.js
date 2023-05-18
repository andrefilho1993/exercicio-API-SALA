const express = require('express');

const app = express();

const departamentoRoute = require('./routes/departamentoRoute')
const funcionarioRoute = require('./routes/funcionarioRoute')
const dependenteRoute = require('./routes/dependenteRoute')

app.use(express.json());

app.use(express.urlencoded({ extended: false }))

app.use('/departamento', departamentoRoute);
app.use('/funcionario', funcionarioRoute);
app.use('/dependente', dependenteRoute);

app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada.')
    erro.status = 404;
    next(erro)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    })
})

module.exports = app;