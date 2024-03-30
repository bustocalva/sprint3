const fs = require('fs');

const fileContentAsync = fs.readFile(
    process.argv[2], 
    'utf8', 
    (err, data) => {
      
      if (err) {
        return new Error('Error');
      } else {
        const docLines = data.split('\n');
        const numLines = docLines.length - 1;
        process.stdout.write(numLines.toString() + '\n');
      }
    }
  );
  fileContentAsync;