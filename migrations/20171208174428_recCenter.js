
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('ballcourts', (table) => {
            table.increments().primary()
            table.string('name')
            table.string('address')
            table.string('city')
            table.string('state')
            table.string('number')
            table.string('hours')
            table.string('image')
            table.integer('zipcode')
        })
    ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('ballcourts')
};
