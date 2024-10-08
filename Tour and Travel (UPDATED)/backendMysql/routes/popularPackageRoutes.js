const express = require("express");
const popularPackage = require("../models/popularPackage");
const router = express.Router();

// Create a new popularPackage
router.post("/", async (req, res) => {
  try {
    const newpopularPackage = await popularPackage.create(req.body);
    res.status(201).json(newpopularPackage);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the popularPackage" });
  }
});

// Get all popularPackages
router.get("/", async (req, res) => {
  try {
    const popularPackages = await popularPackage.findAll();
    res.json(popularPackages);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching popularPackages" });
  }
});

// Get a popularPackage by ID
router.get("/:id", async (req, res) => {
  try {
    const popularPackages = await popularPackage.findByPk(req.params.id);
    if (!popularPackages) {
      return res.status(404).json({ error: "popularPackage not found" });
    }
    res.json(popularPackages);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the popularPackage" });
  }
});

// Update a popularPackage by ID
router.put("/:id", async (req, res) => {
  try {
    const [updated] = await popularPackage.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ error: "popularPackage not found" });
    }
    const updatedpopularPackage = await popularPackage.findByPk(req.params.id);
    res.json(updatedpopularPackage);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the popularPackage" });
  }
});

// Delete a popularPackage by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await popularPackage.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ error: "popularPackage not found" });
    }
    res.status(204).send(); // No content
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the popularPackage" });
  }
});

module.exports = router;
