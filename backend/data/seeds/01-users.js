const bcrypt = require('bcryptjs')

exports.seed = async function (knex) {
  await knex('users').insert([
    { username: 'Ray', password: await bcrypt.hash('test', 10) }
  ])
};
