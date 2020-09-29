const routes = require("express").Router();
const boletoController = require("./controllers/boletoController");
//const middleware = require("./auth");

routes.get("/", (req, res) => {
  console.log("LALALALA");
  return res.send(
    "Seu sorriso é tao resplandecente que deixou meu coração alegre, me dê a mão pra fugir dessa terrível escuridão"
  );
});

routes.post("/boleto", boletoController.handleTecnospeedRequisition);

module.exports = routes;
