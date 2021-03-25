
exports.up = function(knex) {
    return knex.schema.createTable('games', (tbl) => {
        tbl.increments()
        tbl.string('name', 180).notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('games')
};
