module.exports = app => {
    const clientes = require("../controllers/cliente.controller");
  
    var router = require("express").Router();
  
    // Criando um novo cliente
    router.post("/", clientes.create);
    app.use('/',router);

}