const http = require('http');

let result = '';

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8');
  response.on('data', (chunk) => {
    result += chunk;
  });
  response.on('end', () => {
    console.log(result.length);
    console.log(result);
  });
});