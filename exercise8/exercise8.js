var Hapi = require('hapi');
var path = require('path');
var fs = require('fs');
var rot13 = require('rot13-stream')();

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
  path: '/',
  method: 'GET',
  handler: function (request, reply) {
    var input = fs.createReadStream(path.join(__dirname + '/input.txt'));
    console.log(rot13);
    reply(input.pipe(rot13));
  }
});

server.start();
