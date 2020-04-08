const connect = require('./client');

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
};

const handleUserInput = (input) => { // Do something based on user input
    if (input ===  '\u0003'){
      process.exit();
    }
};

console.log('Connecting ...');
setupInput();
connect();

