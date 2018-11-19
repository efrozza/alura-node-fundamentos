//importamos o express
let express = require('express');

// objeto que permite carregarmos os modulos automaticamente
// excluindo a necessidade de darmos require nas rotas, por exemplo
let load = require('express-load');

module.exports = () => {
  // criamos uma instancia do express
  let app = express();

  // definimos a engine de views como sendo  oejs
  app.set('view engine', 'ejs');

  // setar a pasta onde estarão as views
  // usamos .app pois o caminho é referente a onde estamos rodando o  nosso servidor, no caso a pasta raiz
  app.set('views', './app/views');

  // carrega as rotas passando a pasta onde estao as rotas (routes)
  // e passamos um objeto com o atributo cwd informando a pasta app para que o load nao precise
  // varrer varias pastas da aplicação
  // carregamos a pasta infra também
  load('routes', { cwd: 'app' })
    .then('infra')
    .into(app);
  return app;
};
