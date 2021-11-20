const bcrypt = require("bcryptjs");

const hash = bcrypt.hashSync("password", 8);

exports.seed = function(knex, Promise) {
  return knex('users').insert([   
    { username: 'tom', password: hash, role_id: 1},
    { username: 'jerry', password: hash, role_id: 1},
    { username: 'garfield', password: hash, role_id: 2},
    { username: 'odie', password: hash, role_id: 2},
  ]);
};
