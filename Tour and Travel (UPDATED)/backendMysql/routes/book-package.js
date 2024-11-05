const express = require("express");
const router = express.Router();
const {
  packageBookCreate,
  packageBookDelete,
  packageBookReadAll,
  packageBookReadOne,
} = require("../controllers/book-package");

// Route for getting or deleting a single booking by ID
router
  .route("/:id")
  .delete(packageBookDelete) // DELETE a booking by ID
  .get(packageBookReadOne); // GET a specific booking by ID

// Route for creating or getting all bookings
router
  .route("/book-package")
  .get(packageBookReadAll) // GET all bookings
  .post(packageBookCreate); // POST to create a new booking (use POST instead of PUT)

module.exports = router;