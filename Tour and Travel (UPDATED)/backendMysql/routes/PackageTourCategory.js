const express = require("express");
const router = express.Router();
const {addCategory, getCategories} =  require("../controllers/PackageTourCategory");

router
  .route("/package-tour-category")
  .get(getCategories)
  .put(addCategory);

module.exports = router;
