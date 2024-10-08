// routes/packageRoutes.js
const express = require("express");
const Package = require("../models/packageModel");
const router = express.Router();

// Create a package
router.post("/packages", async (req, res) => {
  req.body.images.forEach((element) => {
    element.key = Math.random().toString(16).slice(2);
  });
  req.body.attractions.forEach((element) => {
    element.key = Math.random().toString(16).slice(2);
  });
  req.body.tourHighLights.forEach((element) => {
    element.key = Math.random().toString(16).slice(2);
  });
  req.body.pricePerPerson.forEach((element) => {
    element.key = Math.random().toString(16).slice(2);
  });
  console.log(req.body);

  try {
    const newPackage = await Package.create(req.body);
    res.status(201).json(newPackage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

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
router.put("/packages/:id", async (req, res) => {
  try {
    const updatedPackage = await Package.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    if (updatedPackage[0] === 0)
      return res.status(404).json({ message: "Package not found" });
    res.status(200).json(updatedPackage[1][0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

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
