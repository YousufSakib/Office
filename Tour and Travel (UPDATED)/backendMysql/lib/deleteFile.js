const fs = require("fs");

const deleteFile = async (filePath) => {
  console.log("requesed to delete the file : " + filePath);
  fs.unlink(filePath, (err) => {
    if (err) {
      return Promise.reject(`Error removing file: ${err}`);
    }
    console.log("successfully deleted");
    return Promise.resolve(`File ${filePath} has been successfully removed.`);
  });
};

module.exports = { deleteFile };
