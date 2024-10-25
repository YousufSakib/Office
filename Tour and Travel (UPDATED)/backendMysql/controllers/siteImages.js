const path = require("path");
const Image = require("../models/image");

// Helper function to extract image paths
const getImagePath = (req, fieldName, currentImagePath) => {
  return req.files[fieldName] && req.files[fieldName].length > 0
    ? path.basename(req.files[fieldName][0].path)
    : currentImagePath;
};

// GET route to fetch existing images
const read = async (req, res) => {
  try {
    const imagesEntry = await Image.findOne();

    if (imagesEntry) {
      res.status(200).json(imagesEntry);
    } else {
      res.status(404).json({ message: "No site images found." });
    }
  } catch (error) {
    console.error("Database error while fetching images:", error);
    res
      .status(500)
      .json({ error: "Internal server error. Failed to fetch images." });
  }
};

// Create or update image entries (PUT)
const createOrUpdate = async (req, res) => {
  try {
    // Ensure only one entry persists in the database
    const imageEntry = await Image.findOne();

    const fieldsToUpdate = {
      packageHeroImg: getImagePath(
        req,
        "packageHeroImg",
        imageEntry?.packageHeroImg,
      ),
      aboutHeroImg: getImagePath(req, "aboutHeroImg", imageEntry?.aboutHeroImg),
      homeHeroImg: getImagePath(req, "homeHeroImg", imageEntry?.homeHeroImg),
      logo: getImagePath(req, "logo", imageEntry?.logo),
      placesToVistHeroImg: getImagePath(
        req,
        "placesToVistHeroImg",
        imageEntry?.placesToVistHeroImg,
      ),
      meetBangladeshHeroImg: getImagePath(
        req,
        "meetBangladeshHeroImg",
        imageEntry?.meetBangladeshHeroImg,
      ),
      contactUsHeroImg: getImagePath(
        req,
        "contactUsHeroImg",
        imageEntry?.contactUsHeroImg,
      ),
    };

    if (imageEntry) {
      await imageEntry.update(fieldsToUpdate);
      res.status(200).json({ message: "Images updated successfully" });
    } else {
      const newImageEntry = await Image.create(fieldsToUpdate);
      console.log(newImageEntry);
      res.status(201).json({ message: "Successfully created images" });
    }
  } catch (error) {
    console.error("Error updating images:", error);
    res.status(500).json({ error: "Failed to update images." });
  }
};

module.exports = { read, createOrUpdate };
