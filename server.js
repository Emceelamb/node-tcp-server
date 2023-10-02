const net = require("net"); // Import net package

const PORT = 8008; // Port that server will run on

const server = new net.Server(); // Initialize Server instance

server.on("connection", (client) => {
  // Socket connection event
  console.log("Connection established with:", client.remoteAddress);

  // Event listener for data coming from the client
  client.on("data", (data) => {
    console.log(data.toString());
    client.write("Hello from the server."); // Write to the client
    client.end(); // Disconnect from client
  });
});

// Server listener
server.listen(PORT, () => console.log("Server is listening on port: ", PORT));
