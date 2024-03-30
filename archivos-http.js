const http = require('http');
const fs = require('fs');
const PORT = process.argv[2];
const filePath = process.argv[3];

 const httpFileServer = (port, filePath) => {
  const server = http.createServer(
    (
      _req,
      res
    ) => {
      res.setHeader('Content-Type', 'text/plain');

      const fileStream = fs.createReadStream(filePath);

      fileStream.pipe(res);
    }
  );
  server.listen(port);
  return server;
};

httpFileServer(PORT, filePath);