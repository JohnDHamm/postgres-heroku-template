module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/pg-heroku-template',
    seeds: {
      directory: './db/seeds'
    },
    migrations: {
      directory: './db/migrations'
    },
    // enabling foreign key constraint for SQLite3 - disabled by default
    // pool: {
    //   afterCreate: (db, cb) => db.run('PRAGMA foreign_keys = ON', cb)
    // },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      // tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      // tableName: 'knex_migrations'
    }
  }

};
