const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    // code that sends back 'you ded cuz you idled' when kicked from server
    
    console.log(data);
  });

  conn.on("connect", () => {
    // code when the connection is first established and connected to server
    console.log("Sucessfully connected to game server");
    conn.write('Name: Hmm');
    conn.write('Move: up');
    //setTimeout(() => {conn.write('Move: right')}, 1000);
  });


  return conn;
};

module.exports = {connect};