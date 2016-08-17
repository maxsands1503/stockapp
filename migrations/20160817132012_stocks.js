
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stocks', function(table){
    table.increments();
    table.integer('user_id').references('users.id');
    table.string('ticker');
    table.integer('owned');
    table.decimal('avgPrice');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stocks');
};
