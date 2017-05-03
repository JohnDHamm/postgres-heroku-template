
module.exports.up = function(knex, Promise) {
  return knex.schema.createTable('TableOne', table => {
  	table.increments() //creates an incrementing id as primary key
  	table.string('ColumnOne').unique()
  	table.string('ColumnTwo')
  })
};

module.exports.down = function(knex, Promise) {
  return knex.schema.dropTable('TableOne')
};
