module.exports = app => {
    const empresas = require("../controllers/empresa.controller");

    var router = require("express").Router();

    // Criando uma nova empresa
    router.post("/", empresas.create);

    // Buscando todas as empresas
    router.get("/", empresas.findAll);

    //Recuperando um único empresa com o id
    router.get("/:id", empresas.findOne);

    // Atualizando a empresa pelo id
    router.put("/:id", empresas.update);

    // Deletando a empresa pelo id
    router.delete("/:id", empresas.delete);

    // Deletando todas as empresas
    router.delete("/", empresas.deleteAll);


    app.use('/api/empresas', router);

};