const express = require("express");
const router = express.Router();
const {
  createPackagePlace,
  getAllPackagePlaces,
} = require("../controllers/packagePlace");

router
  .route("/packagePlaces")
  .get(getAllPackagePlaces)
  .post(createPackagePlace);

module.exports = router;
