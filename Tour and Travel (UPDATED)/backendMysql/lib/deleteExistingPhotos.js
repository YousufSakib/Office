const { deleteFile } = require("./deleteFile");
const Package = require("../models/packageModel");

const deletePackagePhotos = async (req, res, next) => {
  try {
    const oldpackage = await Package.findByPk(req.params.id);
    if (!oldpackage)
      return res.status(404).json({ message: "Package not found" });

    const images = JSON.parse(oldpackage.images);
    for (let i = 0; i < images.length; i++) {
      console.log(images[i].src);
      await deleteFile(`/uploads/${images[i].src}`);
    }
    await deleteFile(`/uploads/${oldpackage.profileImg}`);
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { deletePackagePhotos };
