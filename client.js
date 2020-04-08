const net = require('net');

const connect = function() {
  const name = 'Name: RR';
  const up = 'Move: up';
  const right = 'Move: right';
  const down = 'Move: down';
  const left = 'Move: left';

  
  const conn = net.createConnection({ 
    host: '135.23.222.148', 
    port: 50541
  });

  conn.setEncoding('utf8'); 
  conn.write(`${name}`);

  setInterval(() => { conn.write(`${up}`)}, 5000);
  setInterval(() => { conn.write(`${right}`)}, 1000);
  setInterval(() => { conn.write(`${down}`)}, 1000);
  setInterval(() => { conn.write(`${left}`)}, 1000);

  conn.on('data', (data) => {
    console.log('Received: ' + data);
  });


  return conn;
}

module.exports = connect;


/* 
To accomplish this, inside the connect function, use the .on method on our conn object to register a "connect" handler (a callback function). In the callback, print a message for us (the player) to see - something like "Successfully connected to game server" will suffice
*/