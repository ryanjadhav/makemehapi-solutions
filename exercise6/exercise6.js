var Hapi = require('hapi');
var path = require('path');

var options = {
  views: {
    path: path.join(__dirname + "/templates"),
    engines: {
      html: require('handlebars')
    }
  }
};

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080), options);

server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: "index.html"
  }
});

server.route({
  path: '/proxy',
  method: 'GET',
  handler: {
    proxy: {
      host: '127.0.0.1',
      port: '65535'
    }
  }
});

server.start();
