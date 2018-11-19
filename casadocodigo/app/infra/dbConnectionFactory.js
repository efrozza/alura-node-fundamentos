// configurando o acesso ao mysql
let mysql = require('mysql');

function createDbConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'casadocodigo',
  });
}

//wrapper
module.exports = () => {
  return createDbConnection;
};
