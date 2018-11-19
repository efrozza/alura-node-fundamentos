module.exports = function(app) {
  app.get('/produtos', function(request, response) {
    // a biblioteca express-load permite que façamos o acesso direto ao arquivo carregado
    let connection = app.infra.dbConnectionFactory();

    /*
      A ideia do new é realmente criar um novo contexto de uso para a 
      estrutura que está no arquivo produtosBanco.js.
      Portanto, quando estivermos usando o this dentro de uma função não 
      sabemos exatamente quem vai ser esse this. Portanto, o programador que estiver 
      desenvolvendo tem que saber que deve ser usado o new. 
      Quando isso é esquecido, pode acarretar em problemas no futuro.
    */

    let produtosBanco = new app.infra.produtosBanco(connection);

    // a função lista recebe a coneção e uma função de callback que vai renderizar a lista
    produtosBanco.lista((err, result) => {
      response.render('produtos/lista', { lista: result });
    });

    connection.end();
  });
};
