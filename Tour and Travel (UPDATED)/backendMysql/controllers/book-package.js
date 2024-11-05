const express = require("express");
const router = express.Router();
const BookPackage = require("../models/book-package"); // Adjust the path as necessary

// Create a new package booking
const packageBookCreate = async (req, res) => {
  try {
    // Add validation for required fields before proceeding
    if (!req.body.packageId || !req.body.customerName) {
      return res
        .status(400)
        .json({ error: "Package ID and customer name are required." });
    }

    const newBooking = await BookPackage.create(req.body);
    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Error creating package booking:", error);
    res.status(500).json({ error: "Failed to create the package booking." });
  }
};

// Read all bookings
const packageBookReadAll = async (req, res) => {
  try {
    const bookings = await BookPackage.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Failed to fetch bookings." });
  }
};

// Read a single booking by ID
const packageBookReadOne = async (req, res) => {
  try {
    const booking = await BookPackage.findByPk(req.params.id);
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.status(404).json({ error: "Booking not found." });
    }
  } catch (error) {
    console.error("Error fetching booking:", error);
    res.status(500).json({ error: "Failed to fetch booking." });
  }
};

// Delete a booking by ID
const packageBookDelete = async (req, res) => {
  try {
    const booking = await BookPackage.findByPk(req.params.id);
    if (booking) {
      await booking.destroy();
      res.status(204).send(); // No content after successful deletion
    } else {
      res.status(404).json({ error: "Booking not found." });
    }
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ error: "Failed to delete booking." });
  }
};

module.exports = {
  packageBookCreate,
  packageBookDelete,
  packageBookReadAll,
  packageBookReadOne,
};
