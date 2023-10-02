const net = require("net");

const PORT = 8008;

const server = net.createServer((socket) => {
  console.log("Connection established with:", socket.remoteAddress);
  socket.on("data", (data) => {
    console.log(data.toString());
    socket.write("Hello from the server.");
    socket.end();
  });
});

server.listen(PORT, () => console.log("Server is listenig on port: ", PORT));
