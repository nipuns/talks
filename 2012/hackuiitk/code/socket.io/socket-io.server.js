var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app);
app.listen(8080);

function handler (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}
io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('batman', function (data) {
    console.log(data);
  });
});
