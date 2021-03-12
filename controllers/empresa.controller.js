const db = require("../models");
const Empresa = db.empresas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validando a requisição
    if (!req.body.nome) {
        res.status(400).send({
            message: "O nome precisa ser informado!"
        });
        return;
    }

    // Criando a Empresa
    const empresa = {
        Tipo: req.body.Tipo,
        NomeEmpresa: req.body.NomeEmpresa,
        CPFEmpresa: req.body.CPFEmpresa,
        EmailEmpresa: req.body.EmailEmpresa,
        TelefoneEmpresa: req.body.TelefoneEmpresa,
        senhaEmpresa: req.body.senhaEmpresa,
        Confirmar_senha_Empresa: req.body.Confirmar_senha_Empresa,
        EndereçoEmpresa: req.body.EndereçoEmpresa,
        NumeroEmpresa: req.body.NumeroEmpresa,
        ComplementoEmpresa: req.body.ComplementoEmpresa,
        CEPEmpresa: req.body.CEPEmpresa,
        BairroEmpresa: req.body.BairroEmpresa,
        CidadeEmpresa: req.body.CidadeEmpresa,
        UFEmpresa: req.body.UFEmpresa
    };

    // Salvando a empresa no banco
    Empresa.create(empresa)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu ao tentar criar uma empresa."
            });
        });
};

// Mostrando todas as empresas cadastradas
exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

    Empresa.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocorreu algum erro ao tentar recuperar o nome das empresas."
            });
        });
};

// Mostrando empresa pelo id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Empresa.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Erro ao recuperar a Empresa com id=" + id
            });
        });
};

// Atualizando o empresa identificado pelo id
exports.update = (req, res) => {
    const id = req.params.id;

    Empresa.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `Empresa com o Id=${id}, foi atualizada com sucesso.`
                });
            } else {
                res.send({
                    message: `Não é possível atualizar a empresa com o id=${id}. Talves a empresa não tenha sido encontrado ou a requisição no corpo do documento está vazia!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erro ao atualizar o empresa id=" + id
            });
        });
};

// Deletando a empresa pelo id
exports.delete = (req, res) => {
    const id = req.params.id;

    Empresa.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `Empresa com o Id=${id}, foi deletada com sucesso!`
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o empresa com o id=${id}. Talves o Empresa não tenha sido encontrado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não foi possível deletar a Empresa com id=" + id
            });
        });
};

// Deletando todos os registros da base
exports.deleteAll = (req, res) => {
    Empresa.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: ` Todas as ${nums} empresas foram deletadas com sucesso!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocorreu algum erro ao tentar deletar todas as empresas."
            });
        });
};