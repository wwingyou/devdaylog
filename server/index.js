const { readFile } = require('node:fs');
const http = require('node:http');

const server = http.createServer();


server.on('request', (req, res) => {
  console.log(`request to ${req.url}`);
  const fp = 'public' + ((req.url == '/') ? '/index.html' : req.url);

  readFile(fp, (err, data) => {
    if (err) {
      console.log(` !! error: ${err.message}`);
      res.writeHead(404);
      res.end();
    } else {
      const s = fp.split('.');
      const ext = s[s.length - 1];
      const headers = {};
      switch (ext) {
        case 'html': headers['Content-Type'] = 'text/html'; break;
        case 'css': headers['Content-Type'] = 'text/css'; break;
        case 'js': headers['Content-Type'] = 'text/javascript'; break;
        default: headers['Content-Type'] = 'text/plain';
      }

      console.log(` -> offering '${fp}'`);
      res.writeHead(200, headers);
      res.end(data);
    }
  });
});

server.listen(8000);

console.log('🌇 devday.log is listening on 8000...');
