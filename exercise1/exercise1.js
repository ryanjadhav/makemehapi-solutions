var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
  path: '/',
  method: 'GET',
  handler: handler 
});

function handler (request, reply) {
  reply("Hello Hapi");
};

server.start();
