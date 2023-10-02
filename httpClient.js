const net = require("net");

const PORT = 80;
const HOST = process.argv[2];

const socket = new net.Socket();

const rawHttpRequest = `GET / HTTP/1.1\r\nHost: ${HOST}\r\n\r\n`;

socket.connect({
  port: PORT,
  host: HOST,
});

socket.on("connect", () => {
  console.log("TCP connection established.");
  socket.write(rawHttpRequest);
});

socket.on("data", (data) => {
  console.log(data.toString());
  socket.end();
});

socket.on("end", () => {
  console.log("TCP connection ended.");
});
