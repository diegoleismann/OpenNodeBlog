#!/usr/bin/env node
const api_server = require('./cms/modules/core/core');
const proxy = require('./cms/modules/core/proxy');
const site_server = require('./cms/modules/core/site');
const cms_server = require('./cms/modules/core/cms');
const http = require('http');
const port = 80
const site_port = 8000
const api_port = 8001
const cms_port = 8002
const isProd = false

const server = http.createServer(proxy);
server.listen(port, () => console.log('listening on port 80...'));
server.on('error', (err) => {
  console.log(err, 'ON ERROR');
});
server.on('listening', (err) => {
  console.log('listening ' + port)
});

const api = http.createServer(api_server)
api.listen(api_port, () => console.log('api_server'));
api.on('error', (err) => {
  console.log(err, 'ON ERROR');
});
api.on('listening', (err) => {
  console.log('listening ' + api_port)
});


if (isProd) {
  //corrigir o inicio do server 8000  
  const site = http.createServer(site_server)
  site.listen(site_port, () => console.log('site_server'));
  site.on('error', (err) => {
    console.log(err, 'ON ERROR');
  });
  site.on('listening', (err) => {
    console.log('listening ' + site_port)
  });

  const cms = http.createServer(cms_server)
  cms.listen(cms_port, () => console.log('cms_server'));
  cms.on('error', (err) => {
    console.log(err, 'ON ERROR');
  });
  cms.on('listening', (err) => {
    console.log('listening ' + cms_port)
  });
}