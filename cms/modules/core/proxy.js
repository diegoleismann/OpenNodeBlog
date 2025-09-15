const http = require('http');

module.exports = (req, res) => {
  let port;
  const cms = new RegExp("[/]cms")
  const api = new RegExp('[/]api')
  port = 8000;
  if (cms.test(req.url)) {
    port = 8002
  }
  if (api.test(req.url)) {
    port = 8001
  }
  console.log(req.url, port, "PROXY");
  const Request = http.request(
    { port, path: req.url, headers: req.headers, method: req.method },
    (ProxyResponse) => {

      res.writeHead(ProxyResponse.statusCode, ProxyResponse.headers)
      ProxyResponse.pipe(res)
    }
  )
  Request.on('error', (e) => {
    console.error('proxied request failed: ' + e.message)
    res.writeHead(500)
    res.end()
  })
  req.pipe(Request)
}