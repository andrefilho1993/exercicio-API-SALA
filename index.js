// Importar o módulo HTTP
const http = require('http');

// Importar o arquivo app.js que contém a configuração da aplicação
const app = require('./app');

// Definir a porta em que o servidor irá escutar
const port = 8080;

// Criar o servidor HTTP com base na configuração da aplicação
const server = http.createServer(app);

// Iniciar o servidor na porta definida
server.listen(port, () => {
    // Exibir uma mensagem no console informando que o servidor foi iniciado com sucesso
    console.log(`Servidor iniciado com sucesso na porta ${port}.`);
});