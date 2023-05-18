const express = require('express');

const app = express();

const departamentoRoute = require('./routes/departamentoRoute')
const funcionarioRoute = require('./routes/funcionarioRoute')
const dependenteRoute = require('./routes/dependenteRoute')
const projetoRoute = require('./routes/projetoRoute')

app.use(express.json());

app.use(express.urlencoded({ extended: false }))

app.use('/departamentos', departamentoRoute);
app.use('/funcionarios', funcionarioRoute);
app.use('/dependentes', dependenteRoute);
app.use('/projetos', projetoRoute);

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