const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148', 
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.write(`hi snek`);
  
  conn.on('data', (data) => {
  console.log("Incoming data:");
  console.log(data);
});

  return conn;
}

console.log('Connecting ...');
connect();
/*
Update the connect function to also attach an event handler to handle incoming data and console log it for the player. */