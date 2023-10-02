const net = require("net");

const PORT = 8008; // Port to connect to
const HOST = "localhost"; // IP address or hostname to connect to

const socket = new net.Socket(); // Initialize a socket

// Connect to server
socket.connect({
  port: PORT,
  host: HOST,
});

// Connect event
socket.on("connect", () => {
  console.log("TCP connection established.");
  socket.write("Hello from client"); // Write data to socket
});

// Data listener
socket.on("data", (data) => {
  console.log(data.toString()); // Print out data received from socket
  socket.end(); // Close socket
});

socket.on("end", () => {
  console.log("TCP connection ended.");
});
