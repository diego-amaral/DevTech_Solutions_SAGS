const db = require("../models");
const Cliente = db.clientes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
      res.status(400).send({
        message: "O nome precisa ser informado!"
      });
      return;
    }
  
    // Create a Cliente
    const cliente = {
      nome: req.body.nome,
      cpf: req.body.cpf,
      email: req.body.email,
      telefone: req.body.telefone,
      usuario: req.body.usuario,
      senha: req.body.senha,
      confirma_senha: req.body.confirma_senha,
      rua: req.body.rua,
      numero: req.body.numero,
      complemento: req.body.complemento,
      cep: req.body.cep,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
      estado: req.body.estado
    };
  
    // Salvando o cliente no banco
    Cliente.create(cliente)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao tentar criar um cliente."
        });
      });
  };

  exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;
  
    Cliente.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro ao tentar recuperar o nome dos clientes."
        });
      });
  };