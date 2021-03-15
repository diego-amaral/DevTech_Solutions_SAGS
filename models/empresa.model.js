module.exports = (sequelize, Sequelize) => {
const Empresa = sequelize.define("empresa", {
    Tipo: {
        type: Sequelize.INTEGER
    },
    Nome: {
        type: Sequelize.STRING
    },
    CNPJ: {
        type: Sequelize.STRING
    },
    Email: {
        type: Sequelize.STRING
    },
    Confirmar_Email: {
        type: Sequelize.STRING
    },
    Telefone: {
        type: Sequelize.STRING
    },
    Senha: {
        type: Sequelize.STRING
    },
    Confirmar_Senha: {
        type: Sequelize.STRING
    },
    Endereço: {
        type: Sequelize.STRING
    },
    Numero: {
        type: Sequelize.INTEGER
    },
    Complemento: {
        type: Sequelize.STRING
    },
    CEP: {
        type: Sequelize.STRING
    },
    Bairro: {
        type: Sequelize.STRING
    },
    Cidade: {
        type: Sequelize.STRING
    },
    UF: {
        type: Sequelize.STRING
    }
});

    return Empresa;


};