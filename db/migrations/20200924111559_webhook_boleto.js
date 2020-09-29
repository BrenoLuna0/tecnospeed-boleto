exports.up = function (knex) {
  return knex.schema.createTable("WEBHOOK_BOLETO", (table) => {
    table.increments("WEBH_BOLE_CODIGO").primary();
    table.string("WEBH_BOLE_TIPO_WH");
    table.date("WEBH_BOLE_DATA_HORA_ENVIO");
    table.string("WEBH_BOLE_CNPJ_CEDENTE");
    table.string("WEBH_BOLE_CONVENIO_CEDENTE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("WEBHOOK_BOLETO");
};
