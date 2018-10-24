const databaseName = "next_demo";

module.exports = {
    development: {
        //client: "postgresql",
        client: "sqlite3",
        // connection: `postgres://localhost:5432/${databaseName}`,
        connection: {
            filename: '/tmp/next.db'
            //host: 'localhost',
            //user: 'dbuser',
            //password: '',
            //database: databaseName
        },
        migrations: {
            directory: __dirname + "/db/migrations"
        },
        seeds: {
            directory: __dirname + "/db/seeds"
        }
    },
    staging: {
        client: "sqlite3",
        connection: {
            filename: '/tmp/next.db'
        },
        migrations: {
            directory: __dirname + "/db/migrations"
        },
        seeds: {
            directory: __dirname + "/db/seeds"
        }
    },
    test: {
        client: "sqlite3",
        // connection: `postgres://localhost:5432/${databaseName}_test`,
        connection: {
            filename: '/tmp/next.db'
        },
        migrations: {
            directory: __dirname + "/db/migrations"
        },
        seeds: {
            directory: __dirname + "/db/seeds"
        }
    }
};
