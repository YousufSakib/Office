const express = require("express");
const router = express.Router();
const BookPackage = require("../models/book-package"); // Adjust the path as necessary

// Create a new package booking
const packageBookCreate = async (req, res) => {
  try {
    console.log(req.url);
    console.log(req.body);
    // Add validation for required fields before proceeding
    if (!req.body.packageId || !req.body.name || !req.body.phoneNo) {
      return res.status(400).json({
        error: "Package ID and customer name name and phone no are required.",
      });
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
    console.log(req.url);
    const { page, limit, isNew, status } = req.query;
    let pageNum = parseInt(page) || 1;
    let limitNum = parseInt(limit) || 10;
    //page and limit validation
    if (limitNum > 100 || limitNum < 0) limitNum = 10;
    if (pageNum < 1) pageNum = 1;
    const where = {};

    if (isNew !== undefined) {
      const isNewNum = parseInt(isNew, 10);
      if (!isNaN(isNewNum)) where.isNew = isNewNum;
    }

    if (status !== undefined) {
      const statusNum = parseInt(status, 10);
      if (!isNaN(statusNum)) where.status = statusNum;
    }
    console.log(where);
    const bookings = await BookPackage.findAndCountAll({
      where,
      limit: limitNum,
      offset: (pageNum - 1) * limitNum,
    });

    res.status(200).json({
      data: bookings.rows,
      pagination: {
        totalItems: bookings.count, //rows matching without pagination
        totalPages: Math.ceil(bookings.count / limitNum),
        currentPage: pageNum,
        pageSize: bookings.rows.length,
      },
    });
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
    console.log(req.url);
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
const packageBookUpdate = async (req, res) => {
  try {
    if (!req.body.packageId || !req.body.name || !req.body.phoneNo) {
      return res.status(400).json({
        error: "Package ID and customer name name and phone no are required.",
      });
    }
    const booking = await BookPackage.findByPk(req.params.id);
    if (booking) {
      const updatedBooking = await booking.update(req.body);
      res.status(200).json(updatedBooking);
    } else {
      res.status(404).json({ error: "Booking not found" });
    }
  } catch (error) {
    console.error("Error updating booking: ", error);
    res.status(500).json({ error: "Failed to update booking." });
  }
};

module.exports = {
  packageBookCreate,
  packageBookDelete,
  packageBookReadAll,
  packageBookReadOne,
  packageBookUpdate,
};
