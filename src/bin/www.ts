'use strict';
/**
 * Module dependencies.
*/

import app from '../app';
import * as http from 'http';
import * as spdy from 'spdy';
import * as fs from 'fs';
/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || 3000);
app.set('port',port);

/**
 * Create HTTP server.
 */

const options = {
  key: fs.readFileSync('domain.key'),
  cert: fs.readFileSync('domain.crt'),
  ca: fs.readFileSync('CSR.csr')
};
//
//var server = spdy.createServer(options, app);
var server = http.createServer(app);

/**
 * Listen on provided port,on all network interfaces.
 */

server.listen(port, onListening);
server.on('error',onError);

/**
 * Normalize a port into a number,string,or false.
 */
function normalizePort(val : any): number|string|boolean {
  let port = parseInt(val,10);
  
  if(isNaN(port)){
    //name pipe
    return val;
  }
  
  if(port >= 0){
    return port;
  }
  
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall != 'listen') {
    throw error;
  }
  
  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  
  //handle specific listen errors with friendly messages
  switch(error.code) {
    case 'EACCES':
      console.error(bind + 'requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + 'is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
  
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}