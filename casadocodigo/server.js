//importamos as configurações do  express
let app = require('./config/express')();

// tratando as rotas
// vamos passar a variavel app que contem o modulo express para funcao que trata rotas conseguir fazer
// app.get
let rotasProdutos = require('./app/routes/produtos')(app);

// ouvindo a porta 3000
app.listen(3000, function() {
  console.log('servidor rodando');
});
