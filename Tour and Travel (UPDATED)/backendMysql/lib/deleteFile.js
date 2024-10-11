const fs = require("fs");
const path = require("path");

const deleteFile = async (filePath) => {
  fs.unlink(`${path.dirname(path.dirname(__filename))}/${filePath}`, (err) => {
    if (err) {
      console.log(`${err}`);
    }
    return Promise.resolve();
  });
};

module.exports = { deleteFile };
