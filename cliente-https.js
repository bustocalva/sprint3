const http = require('http');

http
  .get(process.argv[2], (response) => {

    response.setEncoding('utf8'); 

    response.on('data', (chunk) => {
      console.log(chunk);
    });
  
    response.on('error', (error) => {
      
      console.log('Error: ' + error);
    });
  })
  .on('error', (fail) => {
    console.error(`Got error: ${fail.message}`);
  }); 