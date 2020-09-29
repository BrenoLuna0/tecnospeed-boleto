exports.up = function (knex) {
  return knex.schema.createTable("WEBHOOK_BOLETO_TITULO", (table) => {
    table.increments("WEBH_BOLE_TITU_CODIGO").primary();
    table.integer("WEBH_BOLE_CODIGO");
    table.string("WEBH_BOLE_TITU_SITUACAO");
    table.string("WEBH_BOLE_TITU_ID_INTEGRACAO");
    table.string("WEBH_BOLE_TITU_NOSSO_NUMERO");
    table.date("WEBH_BOLE_TITU_PAGTO_DATA");
    table.float("WEBH_BOLE_TITU_PAGTO_VALO_PAGO");
    table.date("WEBH_BOLE_TITU_PAGTO_CREDITO");
    table
      .foreign("WEBH_BOLE_CODIGO")
      .references("WEBHOOK_BOLETO.WEBH_BOLE_CODIGO")
      .onDelete("SET NULL")
      .onUpdate("SET NULL");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("WEBHOOK_BOLETO_TITULO");
};
