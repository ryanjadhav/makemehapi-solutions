var Hapi = require('hapi');
var path = require('path');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
  path: '/',
  method: 'GET',
  handler: {
    file: path.join(__dirname, '/index.html')
  }
});

server.start();
