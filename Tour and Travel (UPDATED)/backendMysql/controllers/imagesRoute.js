const express = require("express");
const router = express.Router();
const Image = require("../models/image");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// const uploadsDir = path.join(, "uploads");

// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir);
// }

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error("Only images are allowed"));
};

const upload = multer({ storage, fileFilter });

router.post(
  "/site-images",

  upload.fields([
    { name: "packageHeroImg", maxCount: 1 },
    { name: "aboutHeroImg", maxCount: 1 },
    { name: "homeHeroImg", maxCount: 1 },
    { name: "logo", maxCount: 1 },
    { name: "placesToVistHeroImg", maxCount: 1 },
    { name: "meetBangladeshHeroImg", maxCount: 1 },
    { name: "contactUsHeroImg", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const newImageEntry = await Image.create({
        packageHeroImg: req.files["packageHeroImg"]
          ? path.basename(req.files["packageHeroImg"][0].path)
          : null,
        aboutHeroImg: req.files["aboutHeroImg"]
          ? path.basename(req.files["aboutHeroImg"][0].path)
          : null,
        homeHeroImg: req.files["homeHeroImg"]
          ? path.basename(req.files["homeHeroImg"][0].path)
          : null,
        logo: req.files["logo"]
          ? path.basename(req.files["logo"][0].path)
          : null,
        placesToVistHeroImg: req.files["placesToVistHeroImg"]
          ? path.basename(req.files["placesToVistHeroImg"][0].path)
          : null,
        meetBangladeshHeroImg: req.files["meetBangladeshHeroImg"]
          ? path.basename(req.files["meetBangladeshHeroImg"][0].path)
          : null,
        contactUsHeroImg: req.files["contactUsHeroImg"]
          ? path.basename(req.files["contactUsHeroImg"][0].path)
          : null,
      });

      console.log(newImageEntry);
      return res.status(201).json({ message: "Successfully images uploaded" });
    } catch (error) {
      console.error("Error uploading images:", error);
      res.status(500).json({ error: "Failed to upload images." });
    }
  }
);

// PUT route to update existing image entries
router.put(
  "/site-images/:id",
  upload.fields([
    { name: "packageHeroImg", maxCount: 1 },
    { name: "aboutHeroImg", maxCount: 1 },
    { name: "homeHeroImg", maxCount: 1 },
    { name: "logo", maxCount: 1 },
    { name: "placesToVistHeroImg", maxCount: 1 },
    { name: "meetBangladeshHeroImg", maxCount: 1 },
    { name: "contactUsHeroImg", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const imageEntry = await Image.findAll();

      if (imageEntry) {
        await imageEntry.update({
          packageHeroImg:
            req.files["packageHeroImg"] &&
            req.files["packageHeroImg"].length > 0
              ? path.basename(req.files["packageHeroImg"][0].path)
              : imageEntry.packageHeroImg,
          aboutHeroImg:
            req.files["aboutHeroImg"] && req.files["aboutHeroImg"].length > 0
              ? path.basename(req.files["aboutHeroImg"][0].path)
              : imageEntry.aboutHeroImg,
          homeHeroImg:
            req.files["homeHeroImg"] && req.files["homeHeroImg"].length > 0
              ? path.basename(req.files["homeHeroImg"][0].path)
              : imageEntry.homeHeroImg,
          placesToVistHeroImg:
            req.files["placesToVistHeroImg"] &&
            req.files["placesToVistHeroImg"].length > 0
              ? path.basename(req.files["placesToVistHeroImg"][0].path)
              : imageEntry.placesToVistHeroImg,
          logo:
            req.files["logo"] && req.files["logo"].length > 0
              ? path.basename(req.files["logo"][0].path)
              : imageEntry.logo,
          meetBangladeshHeroImg:
            req.files["meetBangladeshHeroImg"] &&
            req.files["meetBangladeshHeroImg"].length > 0
              ? path.basename(req.files["meetBangladeshHeroImg"][0].path)
              : imageEntry.meetBangladeshHeroImg,
          contactUsHeroImg:
            req.files["contactUsHeroImg"] &&
            req.files["contactUsHeroImg"].length > 0
              ? path.basename(req.files["contactUsHeroImg"][0].path)
              : imageEntry.contactUsHeroImg,
        });

        res.status(200).json({ message: "Images updated successfully" });
      } else {
        res.status(404).json({ error: "Image entry not found" });
      }
    } catch (error) {
      console.error("Error updating images:", error);
      res.status(500).json({ error: "Failed to update images." });
    }
  }
);
// GET route to fetch existing images
router.get("/site-images", async (req, res) => {
  try {
    const imageEntry = await Image.findAll();
    res.status(200).json(imageEntry[0]);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Failed to fetch images." });
  }
});

module.exports = router;
