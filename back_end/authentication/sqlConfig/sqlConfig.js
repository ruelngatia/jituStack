const mssql = require('mssql')
const dotenv = require('dotenv')
dotenv.config()

const config ={
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: 'localhost',
    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options:{
        encrypt: false,
        trustServerCertificate: false
    }
}


module.exports = {
    config
}