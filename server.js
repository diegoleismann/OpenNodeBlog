#!/usr/bin/env node
const app = require('./cms/modules/core/core');
const http = require('http');
const port = 3000
var server = http.createServer(app);
server.listen(port);
server.on('error', (err)=>{
  console.log(err);
});
server.on('listening', (err)=>{
  console.log('listening '+port)
});






