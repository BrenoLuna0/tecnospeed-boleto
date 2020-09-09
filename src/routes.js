const routes = require("express").Router();

routes.get("/", (req, res) => {
  return res.send(
    "Seu sorriso é tao resplandecente que deixou meu coração alegre, me dê a mão pra fugir dessa terrível escuridão"
  );
});

routes.post("/boleto", (req, res) => {
  const object = {
    notifica_registrou: () => {
      console.log("Seu Sorriso é ");
    },
    notifica_liquidou: () => {
      console.log("tão resplandecente ");
    },
    notifica_baixou: () => {
      console.log("que deixou meu coração alegre ");
    },
    notifica_rejeitou: () => {
      console.log("Me dê a mão ");
    },
    notifica_alterou: () => {
      console.log("pra fugir dessa terrível escuridão");
    },
  };
  object[req.body.tipoWH]();
  return res.status(200).send(req.body);
});

module.exports = routes;
