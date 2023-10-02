const net = require("net"); // Import net package

const PORT = 80; // Port 80 is reserved for HTTP

const HOST = process.argv[2]; // Use command-line argument

const socket = new net.Socket(); // Initialize socket

// Initialize socket connection
socket.connect({
  port: PORT,
  host: HOST,
});

const rawHttpRequest = `GET / HTTP/1.1\r\nHost: ${HOST}\r\n\r\n`; // RAW HTTP

socket.on("connect", () => {
  // Listener for connect event
  console.log("TCP connection established.");
  socket.write(rawHttpRequest);
});

socket.on("data", (data) => {
  // Listener for data event
  console.log(data.toString());
  socket.end();
});

socket.on("end", () => {
  // Listener for TCP disconnection
  console.log("TCP connection ended.");
});
