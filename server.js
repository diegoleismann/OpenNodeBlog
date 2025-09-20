#!/usr/bin/env node
const api_server = require('./cms/modules/core/core');
const http = require('http');
const port = parseInt(process.env.PORT) | 80

const api = http.createServer(api_server)
api.listen(port, () => console.log('api_server'));
api.on('error', (err) => {
  console.log(err, 'ON ERROR');
});
api.on('listening', (err) => {
  console.log('listening ' + port)
});


