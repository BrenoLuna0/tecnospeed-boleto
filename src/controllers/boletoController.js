module.exports = {
  async handleTecnospeedRequisition(req, res) {
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
  },
};
