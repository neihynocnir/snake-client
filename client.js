const net = require('net');
const name = 'Name: NR';

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148', 
    port: 50541
  });

  conn.write(`${name}`);

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.write(`Hi snek`);
  
  conn.on('data', (data) => {
    console.log("server talking:");
    console.log(data);
  });

  return conn;
}

module.exports = connect;


/* stdin.setEncoding('utf8');
stdin.on('data', (input) => {
    console.log("I wrote this:", input);
    connection.write(`${name}: ${input}`);
})*/