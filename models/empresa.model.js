module.exports = (sequelize, Sequelize) => {
  const Empresa = sequelize.define("empresa", {
    Tipo: {
        type: Sequelize.INTEGER
    },
    NomeEmpresa: {
        type: Sequelize.STRING
    },
    CNPJEmpresa: {
        type: Sequelize.STRING
    },
    EmailEmpresa: {
        type: Sequelize.STRING
    },
    Confirmar_email_Empresa: {
        type: Sequelize.STRING
    },
    TelefoneEmpresa: {
        type: Sequelize.STRING
    },
    senhaEmpresa: {
        type: Sequelize.STRING
    },
    Confirmar_senha_Empresa: {
        type: Sequelize.STRING
    },
    EndereçoEmpresa: {
        type: Sequelize.STRING
    },
    NumeroEmpresa: {
        type: Sequelize.INTEGER
    },
    ComplementoEmpresa: {
        type: Sequelize.STRING
    },
    CEPEmpresa: {
        type: Sequelize.STRING
    },
    BairroEmpresa: {
        type: Sequelize.STRING
    },
    CidadeEmpresa: {
        type: Sequelize.STRING
    },
    UFEmpresa: {
        type: Sequelize.STRING
    }
});

    return Empresa;


};