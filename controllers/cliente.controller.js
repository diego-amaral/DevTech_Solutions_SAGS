const db = require("../models");
const Cliente = db.clientes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validdando a requisição
  if (!req.body.nome) {
    res.status(400).send({
      message: "O nome precisa ser informado!"
    });
    return;
  }

  // Criando o Cliente
  const cliente = {
    NomeUsuario: req.body.NomeUsuario,
    CPF: req.body.CPFUsuario,
    EmailUsuario: req.body.EmailUsuario,
    TelefoneUsuario: req.body.TelefoneUsuario,
    senhaUsuario: req.body.senhaUsuario,
    Confirmar_senha_Usuario: req.body.Confirmar_senha_Usuario,
    EndereçoUsuario: req.body.EndereçoUsuario,
    NumeroUsuario: req.body.NumeroUsuario,
    ComplementoUsuario: req.body.ComplementoUsuario,
    CEPUsuario: req.body.CEPUsuario,
    BairroUsuario: req.body.BairroUsuario,
    CidadeUsuario: req.body.CidadeUsuario,
    UFUsuario: req.body.UFUsuario
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

// Mostrando todos os clientes cadastrados
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

// Mostrando cliente pelo id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cliente.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao recuperar o Cliente com id=${id}.`
      });
    });
};

// Atualizando o cliente identificado pelo id
exports.update = (req, res) => {
  const id = req.params.id;

  Cliente.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `Cliente com o Id=${id},  atualizado com sucesso!`
        });
      } else {
        res.send({
          message: `Não é possível atualizar o cliente com o id=${id}. Talves o cliente não tenha sido encontrado ou a requisição no corpo do documento está vazia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao atualizar o cliente id=${id}`
      });
    });
};

// Deletando o cliente pelo id
exports.delete = (req, res) => {
  const id = req.params.id;

  Cliente.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `Cliente com o Id=${id}, foi deletado com sucesso!`
        });
      } else {
        res.send({
          message: `Não foi possível deletar o cliente com o id=${id}. Talves o Cliente não tenha sido encontrado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Não foi possível deletar o Cliente com id=${id}.`
      });
    });
};

// Deletando todos os registros da base
exports.deleteAll = (req, res) => {
  Cliente.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `Todos os ${nums}  clientes, foram deletados com sucesso!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro ao tentar deletar todos os clientes."
      });
    });
};