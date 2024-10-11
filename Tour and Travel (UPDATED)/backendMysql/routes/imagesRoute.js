const express = require("express");
const router = express.Router();
const Image = require("../models/image");

const multer = require("multer");
const path = require("path");

// Storage settings for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save images to the uploads folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage });

// sequelize.sync();

// POST route to handle image uploads
router.post(
  "/site-images",
  upload.fields([
    { name: "packageHeroImg", maxCount: 1 },
    { name: "aboutHeroImg", maxCount: 1 },
    { name: "homeHeroImg", maxCount: 1 },
    { name: "logo", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const newImageEntry = await Image.create({
        packageHeroImg: req.files["packageHeroImg"]
          ? req.files["packageHeroImg"][0].path
          : null,
        aboutHeroImg: req.files["aboutHeroImg"]
          ? req.files["aboutHeroImg"][0].path
          : null,
        homeHeroImg: req.files["homeHeroImg"]
          ? req.files["homeHeroImg"][0].path
          : null,
        logo: req.files["logo"] ? req.files["logo"][0].path : null,
      });

      res.status(201).json(newImageEntry);
    } catch (error) {
      console.error("Error uploading images:", error);
      res.status(500).json({ error: "Failed to upload images." });
    }
  },
);

// PUT route to update existing image entries
router.put(
  "/site-images",
  upload.fields([
    { name: "packageHeroImg", maxCount: 1 },
    { name: "aboutHeroImg", maxCount: 1 },
    { name: "homeHeroImg", maxCount: 1 },
    { name: "logo", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // Assuming there's only one record in the database (for simplicity)
      const imageEntry = await Image.findOne();

      if (imageEntry) {
        await imageEntry.update({
          packageHeroImg: req.files["packageHeroImg"]
            ? req.files["packageHeroImg"][0].path
            : imageEntry.packageHeroImg,
          aboutHeroImg: req.files["aboutHeroImg"]
            ? req.files["aboutHeroImg"][0].path
            : imageEntry.aboutHeroImg,
          homeHeroImg: req.files["homeHeroImg"]
            ? req.files["homeHeroImg"][0].path
            : imageEntry.homeHeroImg,
          logo: req.files["logo"] ? req.files["logo"][0].path : imageEntry.logo,
        });

        res.status(200).json({ message: "Images updated successfully" });
      } else {
        res.status(404).json({ error: "Image entry not found" });
      }
    } catch (error) {
      console.error("Error updating images:", error);
      res.status(500).json({ error: "Failed to update images." });
    }
  },
);

// GET route to fetch existing images
router.get("/site-images", async (req, res) => {
  try {
    const imageEntry = await Image.findOne();
    res.status(200).json(imageEntry);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Failed to fetch images." });
  }
});

module.exports = { router };
