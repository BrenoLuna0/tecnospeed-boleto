const routes = require("express").Router();

routes.get("/", (req, res) => {
  return res.send(
    "Seu sorriso é tao resplandecente que deixou meu coração alegre, me dê a mão pra fugir dessa terrível escuridão"
  );
});

routes.post("/boleto", (req, res) => {
  console.log(req.body);
  return res.status(200).send(req.body);
});

module.exports = routes;
