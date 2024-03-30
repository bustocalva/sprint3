const http = require('http');

const urls = [process.argv[2], process.argv[3], process.argv[4]];

function collectContent(url) {
  return new Promise((resolve, reject) => {
    let result= '';
    http
      .get(url, (response) => {
        response.setEncoding('utf8');
        response.on('data', (chunk) => {
          result += chunk;
        });
        response.on('end', () => {
          resolve(result);
        });
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}


async function collectAllContent() {

  let content= '';
  let allContent = '';

  try {
    for (let i = 0; i < urls.length; i++) {
      content = await collectContent(urls[i]);
      if (i < urls.length - 1) {
        allContent += content + '\n';
      } else {
        allContent += content;
      }
    }
    return allContent;
  } catch (error) {
    console.log(error);
    return error;
  }
}

collectAllContent().then((data) => console.log(data));