module.exports = function(app) {
  app.get('/produtos', function(request, response) {
    // configurando o acesso ao mysql
    let mysql = require('mysql');
    // a função createConnection recebe um objeto
    let connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'casadocodigo',
    });

    // fazer consulta no banco
    connection.query('select * from livros', (err, result) => {
      console.log(result);
      response.send(result);
    });

    connection.end();
  });
};
