module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "zxasqw12",
    "database": "test",
    "entities": [
        __dirname + "/src/app/modules/**/*.model{.ts,.js}"
    ],
    "migrations": ["migration/*{.js,.ts}"],
    "cli": {
        "migrationsDir": "migration"
    }
};
