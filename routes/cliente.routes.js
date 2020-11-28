module.exports = app => {
    const clientes = require("../controllers/cliente.controller");

    var router = require("express").Router();

    // Criando um novo cliente
    router.post("/", clientes.create);


    // Buscando todos os clientes
    router.get("/", clientes.findAll);

    //Recuperando um único cliente com o id
    router.get("/:id", clientes.findOne);

    // Atualizando o cliente pelo id
    router.put("/:id", clientes.update);

    // Deletando o cliente pelo id
    router.delete("/:id", clientes.delete);

    // Deletando todos os clientes
    router.delete("/", clientes.deleteAll);


    app.use('/api/clientes', router);

};