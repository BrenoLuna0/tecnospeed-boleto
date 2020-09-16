const knex = require("../connection");
const {
  generateBoletoId,
  generateBoletoTituloId,
  generateBoletoMovimentoId,
  generateBoletoOcorrenciaId,
} = require("../utils/idGenerator");

module.exports = {
  async handleTecnospeedRequisition(req, res) {
    console.log(req.body);
    return res.status(200).send(true);
    /* const [data, tempo] = req.body.dataHoraEnvio.split(" ");
    const [dia, mes, ano] = data.split("/");
    const [hora, minuto, segundo] = tempo.split(":");
    const trx = await knex.transaction();

    const boletoId = await generateBoletoId();
    await trx("WEBHOOK_BOLETO")
      .insert({
        WEBH_BOLE_CODIGO: boletoId,
        WEBH_BOLE_TIPO_WH: req.body.tipoWH,
        WEBH_BOLE_DATA_HORA_ENVIO: new Date(
          ano,
          mes,
          dia,
          hora,
          minuto,
          segundo
        ),
      })
      .catch((err) => {
        console.log(err);
        trx.rollback();
        return res.status(500).send(false);
      });

    const boletoTituloId = await generateBoletoTituloId();
    await trx("WEBHOOK_BOLETO_TITULO")
      .insert({
        WEBH_BOLE_TITU_CODIGO: boletoTituloId,
        WEBH_BOLE_CODIGO: boletoId,
        WEBH_BOLE_TITU_SITUACAO: req.body.titulo.situacao,
        WEBH_BOLE_TITU_ID_INTEGRACAO: req.body.titulo.idIntegracao,
        WEBH_BOLE_TITU_NOSSO_NUMERO: req.body.titulo.TituloNossoNumero,
        WEBH_BOLE_TITU_PAGTO_DATA: req.body.titulo.PagamentoData || null,
        WEBH_BOLE_TITU_PAGTO_VALO_PAGO:
          parseFloat(req.body.titulo.PagamentoValorPago) || null,
        WEBH_BOLE_TITU_PAGTO_CREDITO:
          req.body.titulo.PagamentoDataCredito || null,
      })
      .catch((err) => {
        console.log(err);
        trx.rollback();
        return res.status(500).send(false);
      });

    if (
      req.body.titulo.TituloMovimentos !== undefined &&
      req.body.titulo.TituloMovimentos.length > 0
    ) {
      let movimentoCodigos = [];
      const movimentos = req.body.titulo.TituloMovimentos.map(
        async (movimento) => {
          const boletoMovimentoId = await generateBoletoMovimentoId();
          const [data, tempo] = movimento.data.split(" ");
          const [dia, mes, ano] = data.split("/");
          const [hora, minuto, segundo] = tempo.split(":");

          movimentoCodigos.unshift({
            movimentoCodigo: movimento.codigo,
            codigo: boletoMovimentoId,
          });

          return {
            WEBH_BOLE_MOVI_CODIGO: boletoMovimentoId,
            WEBH_BOLE_TITU_CODIGO: boletoTituloId,
            WEBH_BOLE_MOVI_CODIGO_MOVI: movimento.codigo,
            WEBH_BOLE_MOVI_MENSAGEM: movimento.mensagem,
            WEBH_BOLE_MOVI_DATA: new Date(ano, mes, dia, hora, minuto, segundo),
          };
        }
      );

      let resultado;
      await Promise.all(movimentos).then(function (results) {
        resultado = results;
      });
      await trx("WEBHOOK_BOLETO_MOVIMENTO")
        .insert(resultado)
        .catch((err) => {
          console.log(err);
          trx.rollback();
          return res.status(500).send(false);
        });
      let arr = req.body.titulo.TituloMovimentos.map((e) => {
        return e.ocorrencias.map((o) => {
          return {
            movimentoCodigo: e.codigo,
            codigo: o.codigo,
            mensagem: o.mensagem,
          };
        });
      });
      const ocorrencias = arr.reduce((res, a) => res.concat(a), []);
      if (ocorrencias.length > 0) {
        const ocorrenciasInsert = ocorrencias.map(async (ocorrencia) => {
          const movimentoCodigo = movimentoCodigos.filter(
            (movimento) =>
              movimento.movimentoCodigo === ocorrencia.movimentoCodigo
          );
          return {
            WEBH_BOLE_OCOR_CODIGO: await generateBoletoMovimentoId(),
            WEBH_BOLE_MOVI_CODIGO: movimentoCodigo.codigo,
            WEBH_BOLE_OCOR_CODIGO_MOVI: ocorrencia.codigo,
            WEBH_BOLE_OCOR_MENSAGEM: ocorrencia.mensagem,
          };
        });
        let ocorrenciasObj;
        await Promise.all(ocorrenciasInsert).then(function (results) {
          ocorrenciasObj = results;
        });
        await trx("WEBHOOK_BOLETO_OCORRENCIA")
          .insert(ocorrenciasObj)
          .catch((err) => {
            console.log(err);
            trx.rollback();
            return res.status(500).send(false);
          });
      }
    }

    trx.commit();
    return res.status(200).send("DEU TUDO CERTO AMEM"); */
  },
};
