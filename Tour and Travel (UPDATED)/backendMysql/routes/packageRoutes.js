// routes/packageRoutes.js
const express = require("express");
const Package = require("../models/packageModel");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Create a package
const upload = multer({ storage });
router.post(
  "/packages",
  upload.fields([{ name: "profileImg" }, { name: "images" }]),
  async (req, res) => {
    try {
      const profileImgPath = path.basename(req.files["profileImg"][0].path);
      // const imagePaths = req.files["images"].map((file) =>
      // path.basename(file.path)
      // );
      const imagePaths = req.files["images"].map((file) => ({
        src: path.basename(file.path),
        key: Math.random().toString(16).slice(2),
      }));
      const createdBy = req.body.createdBy;
      const destination = req.body.destination;
      const duration = req.body.duration;
      const category = req.body.category;
      const name = req.body.name;
      const description = req.body.description;
      const tourHighLights = req.body.tourHighLights;
      const pricePerPerson = req.body.pricePerPerson;
      const attractions = req.body.attractions;

      const doc = {
        profileImg: profileImgPath,
        images: imagePaths,
        createdBy: createdBy,
        destination: destination,
        duration: Number(duration),
        category: category,
        name: name,
        description: description,
        attractions: attractions,
        tourHighLights: tourHighLights,
        pricePerPerson: pricePerPerson,
      };

      console.log("creation object");
      console.log(doc);

      const newPackage = await Package.create(doc);
      res.status(201).json(newPackage);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  },
);

// Get all packages
router.get("/packages", async (req, res) => {
  try {
    const packages = await Package.findAll();
    res.status(200).json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a package by ID
router.get("/packages/:id", async (req, res) => {
  console.log("req : " + req.url);
  console.log("id: " + req.params.id);
  try {
    const package = await Package.findByPk(req.params.id);
    if (!package) return res.status(404).json({ message: "Package not found" });
    res.status(200).json(package);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a package
router.put(
  "/packages/:id",

  upload.fields([{ name: "profileImg" }, { name: "images" }]),

  async (req, res) => {
    try {
      const packageEntry = await Package.findByPk(req.params.id);

      if (packageEntry) {
        await packageEntry.update({
          profileImg:
            req.files["profileImg"] && req.files["profileImg"].length > 0
              ? path.basename(req.files["profileImg"][0].path)
              : packageEntry.profileImg,
          images:
            req.files["images"] && req.files["images"].length > 0
              ? req.files["images"].map((file) => ({
                  src: path.basename(file.path),
                  key: Math.random().toString(16).slice(2),
                }))
              : packageEntry.images,
          ...req.body,
        });
      } else {
        return res.status(404).json({ message: "Package not found" });
      }
      return res.status(200).json({ message: "Package updated successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
);

// Delete a package
router.delete("/packages/:id", async (req, res) => {
  try {
    const result = await Package.destroy({
      where: { id: req.params.id },
    });
    if (result === 0)
      return res.status(404).json({ message: "Package not found" });
    res.status(200).json({ message: "Package deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
