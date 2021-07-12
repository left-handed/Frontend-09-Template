let http = require('http');

http.createServer(function(req, res) {
  console.log(req);
  res.end('Hello word')
}).listen(8082);