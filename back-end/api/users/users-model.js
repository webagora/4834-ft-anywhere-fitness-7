const db = require('../data/db-config');

async function findAll() {
  const users = await db('users as u')
    .select('u.user_id', 'u.username', 'ur.role_type')
    .leftJoin('user_role as ur', 'u.role_id', 'ur.role_id')
    .orderBy('u.user_id');

  return users;
}

async function findBy(filter) {
  const user = await db('users as u')
    .select('u.user_id', 'u.username', 'u.password', 'ur.role_type')
    .leftJoin('user_role as ur', 'u.role_id', 'ur.role_id')
    .where(filter);

  return user;
}

async function findById(id) {
  //"ur" is used on line 24 before it's defined on line 25. Haven't ran into an issue yet, noting just in case.
  const user = await db('users as u')
    .select('u.user_id', 'u.username', 'ur.role_type')
    .leftJoin('user_role as ur', 'u.role_id', 'ur.role_id')
    .orderBy('u.user_id')
    .where('u.user_id', id);

  return user[0];
}

async function add({ username, password, role_type }) {
  let created_user_id;
  await db.transaction(async (trx) => {
    let role_id_to_use;
    const [role] = await trx('user_role').where('role_type', role_type);
    if (role) {
      role_id_to_use = role.role_id;
    } else {
      const [role_id] = await trx('user_role').insert({ role_type: role_type });
      role_id_to_use = role_id;
    }
    const [user_id] = await trx('users').insert(
      {
        username,
        password,
        role_id: role_id_to_use,
      },
      ['user_id']
    );
    created_user_id = user_id.user_id;
  });

  return findById(created_user_id);
}

// SELECT u.user_id, u.username, u.password, ur.role_type
// from users as u
// left join user_role as ur
// on u.role_id = ur.role_id

module.exports = {
  findAll,
  findBy,
  findById,
  add,
};
