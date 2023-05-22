// Importar o módulo Express
const express = require('express');

// Criar uma instância do aplicativo Express
const app = express();

// Importar os módulos de rotas para cada entidade do sistema
const quartosRoute = require('./routes/quartosRoute')
const reservasRoute = require('./routes/reservasRoute')

// Configurar o aplicativo para analisar requisições com formato JSON
app.use(express.json());

// Definir as rotas para cada entidade do sistema
app.use('/quartos', quartosRoute);
app.use('/reservas', reservasRoute);

// Middleware para tratar rotas não encontradas
app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada.')
    erro.status = 404;
    next(erro)
});

// Middleware para tratar erros
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    })
})

module.exports = app;