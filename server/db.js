require("dotenv").config();
const { Pool } = require("pg");

const {
    POSTGRESQL_USER,
    POSTGRESQL_PASSWORD,
    POSTGRESQL_HOST,
    POSTGRESQL_PORT,
    POSTGRESQL_DATABASE,
} = process.env;

const pool = new Pool({
    user: POSTGRESQL_USER,
    password: POSTGRESQL_PASSWORD,
    host: POSTGRESQL_HOST,
    port: POSTGRESQL_PORT,
    database: POSTGRESQL_DATABASE,
});

module.exports = pool;
