const fs = require('fs');
const path = require('path');

function myModule(filePath, fileExt, callback) {
  fs.readdir(filePath, 'utf-8', (err, data) => {
    if (err) {
      callback(err);
      return;
    } else {
      const filteredList = data.filter(
        (extItem) => path.extname(extItem) === `.${fileExt}`
      );
      callback(null, filteredList);
    }
  });
}

module.exports = myModule;