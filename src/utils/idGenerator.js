const knex = require("../connection");

module.exports = {
  async generateBoletoId() {
    return await knex
      .raw("SELECT SEQ_WEBHOOK_BOLETO.NEXTVAL FROM DUAL")
      .then((response) => {
        return response[0].NEXTVAL;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  },

  async generateBoletoTituloId() {
    return await knex
      .raw("SELECT SEQ_WEBHOOK_BOLETO_TITULO.NEXTVAL FROM DUAL")
      .then((response) => {
        return response[0].NEXTVAL;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  },

  async generateBoletoMovimentoId() {
    return await knex
      .raw("SELECT SEQ_WEBHOOK_BOLETO_MOVIMENTO.NEXTVAL FROM DUAL")
      .then((response) => {
        return response[0].NEXTVAL;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  },

  async generateBoletoOcorrenciaId() {
    return await knex
      .raw("SELECT SEQ_WEBHOOK_BOLETO_OCORRENCIA,NEXTVAL FROM DUAL")
      .then((response) => {
        return response[0].NEXTVAL;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  },
};
