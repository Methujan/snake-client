const {connect} = require('./client');


console.log("Connecting ...");
connect();


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // your code here

  if (key === '\u0003') { // ctrl + c
    process.exit(); 
  } 
};

setupInput(); //Calling setupInput
