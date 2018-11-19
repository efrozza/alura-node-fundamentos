//importamos as configurações do  express
let app = require('./config/express')();

// ouvindo a porta 3000
app.listen(3000, function() {
  console.log('servidor rodando');
});
