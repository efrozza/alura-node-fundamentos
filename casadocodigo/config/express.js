//importamos o express
let express = require('express');

// criamos uma instancia do express
let app = express();

// definimos a engine de views como sendo  oejs
app.set('view engine', 'ejs');

// setar a pasta onde estarão as views
// usamos .app pois o caminho é referente a onde estamos rodando o  nosso servidor, no caso a pasta raiz
app.set('views', './app/views');

module.exports = () => {
  return app;
};
