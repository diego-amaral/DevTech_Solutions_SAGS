module.exports = app => {
    const clientes = require("../controllers/cliente.controller");
  
    var router = require("express").Router();
  
    // Criando um novo cliente
    router.post("/", clientes.create);
    

    // Buscando todos os clientes
    router.get("/", clientes.findAll);

    //Recuperando um único cliente com o id
    router.get("/:id", clientes.findOne);

    app.use('/',router);

};