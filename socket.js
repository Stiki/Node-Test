var net = require('net'), messages = new Array();


var server = net.createServer(function (socket) {
  socket.on("connect", function () {
    console.log("Client Connected");
  });
  socket.on("data", function (data) {
    console.log(data + "\0");
    messages.push(data);
    for (var i in messages) {
      socket.write(messages[i] + "\n");
    }
    socket.write("\0");
  });
  socket.on("end", function () {
    socket.end();
  });
})

server.listen(8124, "192.168.1.119");

console.log("Listening on 8124");
