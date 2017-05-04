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
    client: 'pg',
    connection: 'postgres://ypvpexvhcdgnfi:1c517e12de8d03b2b4b1914ad602190cd430e69bf306c779bc03afbeec1b060c@ec2-54-83-205-71.compute-1.amazonaws.com:5432/de9og40npaifi0?ssl=true',
    // connection: {
    //   database: 'my_db',
    //   user:     'username',
    //   password: 'password'
    // },
    // connection: process.env.DATABASE_URL,
    // ssl: true,
    seeds: {
      directory: './seeds'
    },
    migrations: {
      directory: './migrations'
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
