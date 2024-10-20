const fs = require("fs");
const path = require("path");

// Function to delete specified images
const deleteSpecifiedImages = async (imagesToDelete) => {
  const directoryPath = path.join(__dirname, "..", "uploads");

  imagesToDelete.forEach((image) => {
    const filePath = path.join(directoryPath, image);

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error deleting file ${image}:`, err);
      } else {
        console.log(`Deleted image: ${filePath}`);
      }
    });
  });
};

module.exports = {
  deleteSpecifiedImages,
};
