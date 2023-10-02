const net = require("net");

const PORT = 8008;
const HOST = "localhost";

const socket = new net.Socket();

socket.connect({
  port: PORT,
  host: HOST,
});

socket.on("connect", () => {
  console.log("TCP connection established.");
  socket.write("Hello from client");
});

socket.on("data", (data) => {
  console.log(data.toString());
  socket.end();
});

socket.on("end", () => {
  console.log("TCP connection ended.");
});
