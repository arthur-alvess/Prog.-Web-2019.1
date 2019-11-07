const mysql = require('mysql');

const connection = 
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        senha: '',
        database: 'dbcontatos'
    });

module.exports = connection;