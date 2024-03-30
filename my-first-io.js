const fs = require('fs')

const filePath = process.argv[2] 

const myFirstIO = (filePath) => {
  const result = fs.readFileSync(filePath, 'utf-8').split('\n').length - 1;

  return result;
};

console.log(myFirstIO(filePath));