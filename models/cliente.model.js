module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
      nome: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telefone : {
        type: sequelize.STRING
      },
      usuario: {
        type: sequelize.STRING
      },
      senha: {
        type: sequelize.STRING
      },
      confirma_senha: {
        type: sequelize.STRING
      },
      rua: {
        type: sequelize.STRING
      },
      numero: {
        type: sequelize.INTEGER
      },
      complemento: {
        type: sequelize.STRING
      },
      cep: {
        type: sequelize.STRING
      },
      bairro: {
        type: sequelize.STRING
      },
      cidade: {
        type: sequelize.STRING
      },
      estado: {
        type: sequelize.STRING
      }
    });
  
    return Cliente;
  };