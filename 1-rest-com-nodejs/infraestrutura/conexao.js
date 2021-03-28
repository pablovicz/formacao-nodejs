const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'password',
  database: 'rest_nodejs_1'
})  

module.exports = conexao