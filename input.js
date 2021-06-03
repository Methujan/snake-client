const { stdout } = require("process");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", key => {handleUserInput(key)});
  return stdin;
};

let movefunc;
const handleUserInput = function(key) {
  // your code here
  const constantMovement = function(key) {movefunc = setInterval(() => {
    connection.write(key);
  }, 100);
}
  if((key === 'w')){
    
    clearInterval(movefunc);
    constantMovement("Move: up");
  }

  if((key === 'a')){
    clearInterval(movefunc);
    constantMovement("Move: left");
  }

  if((key === 's')){
    clearInterval(movefunc);
    constantMovement("Move: down");

  }
  if((key === 'd')){
    clearInterval(movefunc);
    constantMovement("Move: right");

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