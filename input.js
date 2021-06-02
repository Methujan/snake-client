const { stdout } = require("process");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  if((key === 'w')){
    connection.write("Move: up");
    setInterval(() => {
      
    }, 100);
  }
  
  if((key === 'a')){
    connection.write("Move: left");
  }
  if((key === 's')){
    connection.write("Move: down");
  }
  if((key === 'd')){
    connection.write("Move: right");
  }
  if((key === 'q')){
    connection.write("Say: No no noo noooo");
  }
  if((key === 'o')){
    connection.write("Say: :O");
  }
  if((key === 'u')){
    connection.write("Say: :)");
  }



  if (key === '\u0003') { // ctrl + c
    stdout.write('Exited the game. Tata. \n')
    process.exit(); 
  } 
};

module.exports = {setupInput}