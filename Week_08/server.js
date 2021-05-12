const http = require('http');
http.createServer((req, res) => {
  let body = [];
  req.on('error', (err) => {
    console.log(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('body: ', body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(' Hello Word\n');
  })
}).listen(8088);
