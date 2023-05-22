// Importar o módulo Sequelize
const { Sequelize } = require('sequelize');

// Criar uma nova instância do Sequelize e configurá-la para se conectar
// a um banco de dados MySQL chamado 'hospedagem'
const sequelize = new Sequelize('hospedagem', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

// Tentar autenticar a conexão com o banco de dados
sequelize.authenticate()
    .then(function () {
        // Se a autenticação for bem-sucedida, exibir uma mensagem de sucesso no console
        console.log('Conexão realizada com sucesso!')
    })
    .catch(function () {
        // Se ocorrer um erro durante a autenticação, exibir uma mensagem de erro no console
        console.log('ERRO: Não foi possível realizar a conexão')
    })

// Exportar a instância do Sequelize para ser utilizada em outros arquivos
module.exports = sequelize;