exports.up = function (knex) {
  return knex.schema.createTable("WEBHOOK_BOLETO_OCORRENCIA", (table) => {
    table.increments("WEBH_BOLE_OCOR_CODIGO").primary();
    table.integer("WEBH_BOLE_MOVI_CODIGO");
    table.string("WEBH_BOLE_OCOR_CODIGO_MOVI");
    table.string("WEBH_BOLE_OCOR_MENSAGEM");
    table.date("WEBH_BOLE_OCOR_DATA");
    table
      .foreign("WEBH_BOLE_MOVI_CODIGO")
      .references("WEBHOOK_BOLETO_MOVIMENTO.WEBH_BOLE_MOVI_CODIGO")
      .onDelete("SET NULL")
      .onUpdate("SET NULL");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("WEBHOOK_BOLETO_OCORRENCIA");
};
