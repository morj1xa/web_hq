const Pool = require("pg").Pool;

const pool = new Pool(
    {
        "user": "postgres",
        "password": "123456",
        "host": "10.244.0.102",
        "port": 5432,
        "database": "postgres"
    }
);

module.exports = pool;