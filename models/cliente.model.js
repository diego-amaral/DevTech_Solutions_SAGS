module.exports = (sequelize, Sequelize) => {
  const Cliente = sequelize.define("cliente", {
    NomeUsuario: {
      type: Sequelize.STRING
    },
    CPFUsuario: {
      type: Sequelize.STRING
    },
    EmailUsuario: {
      type: Sequelize.STRING
    },
    Confirmar_email_Usuario: {
      type: Sequelize.STRING
    },
    TelefoneUsuario: {
      type: Sequelize.STRING
    },
    senhaUsuario: {
      type: Sequelize.STRING
    },
    Confirmar_senha_Usuario: {
      type: Sequelize.STRING
    },
    EndereçoUsuario: {
      type: Sequelize.STRING
    },
    NumeroUsuario: {
      type: Sequelize.INTEGER
    },
    ComplementoUsuario: {
      type: Sequelize.STRING
    },
    CEPUsuario: {
      type: Sequelize.STRING
    },
    BairroUsuario: {
      type: Sequelize.STRING
    },
    CidadeUsuario: {
      type: Sequelize.STRING
    },
    UFUsuario: {
      type: Sequelize.STRING
    }
  });

  return Cliente;


};