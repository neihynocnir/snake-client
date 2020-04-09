const net = require('net');

const connect = () => {
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

  setInterval(() => { conn.write(`${up}`)}, 500);
  setInterval(() => { conn.write(`${right}`)}, 500);
  setInterval(() => { conn.write(`${down}`)}, 500);
  setInterval(() => { conn.write(`${left}`)}, 500);
  
  conn.on('data', (data) => {
    console.log('Received: ' + data);
  });

  conn.on('connect', (data) => {
    console.log("You are connected :)");
  });
  return conn;
}

module.exports = connect;


/* 
To accomplish this, inside the connect function, use the .on method on our conn object to register a "connect" handler (a callback function). In the callback, print a message for us (the player) to see - something like "Successfully connected to game server" will suffice
*/