exports.up = function (knex) {
  return knex.schema.createTable("WEBHOOK_BOLETO_MOVIMENTO", (table) => {
    table.increments("WEBH_BOLE_MOVI_CODIGO").primary();
    table.integer("WEBH_BOLE_TITU_CODIGO");
    table.string("WEBH_BOLE_MOVI_CODIGO_MOVI");
    table.string("WEBH_BOLE_MOVI_MENSAGEM");
    table.date("WEBH_BOLE_MOVI_DATA");
    table
      .foreign("WEBH_BOLE_TITU_CODIGO")
      .references("WEBHOOK_BOLETO_TITULO.WEBH_BOLE_TITU_CODIGO")
      .onDelete("SET NULL")
      .onUpdate("SET NULL");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("WEBHOOK_BOLETO_MOVIMENTO");
};
