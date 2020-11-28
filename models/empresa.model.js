module.exports = (sequelize, Sequelize) => {
    const Empresa = sequelize.define("empresa", {
        nome: {
            type: Sequelize.STRING
        },
        cnpj: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        telefone: {
            type: Sequelize.STRING
        },
        usuario: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        },
        confirma_senha: {
            type: Sequelize.STRING
        },
        rua: {
            type: Sequelize.STRING
        },
        numero: {
            type: Sequelize.INTEGER
        },
        complemento: {
            type: Sequelize.STRING
        },
        cep: {
            type: Sequelize.STRING
        },
        bairro: {
            type: Sequelize.STRING
        },
        cidade: {
            type: Sequelize.STRING
        },
        estado: {
            type: Sequelize.STRING
        }
    });

    return Empresa;


};