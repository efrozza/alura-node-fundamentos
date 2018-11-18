// require função java script usada para importar aquivos dentro do node
let http = require('http');

let server = http.createServer(function(request, response) {
  if (request.url == '/produtos') {
    response.end('<html><body><tile>Listando produtos</tile></body></html>');
  } else {
    response.end('<html><body><tile>Home</tile></body></html>');
  }
});
server.listen(3000);

console.log('servidor rodadndo');
