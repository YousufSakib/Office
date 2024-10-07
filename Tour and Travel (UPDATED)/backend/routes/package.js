const express = require("express");
const router = express.Router();

const {
  createPackage,
  getAllPackagesStatic,
  getAlllPackages,
  getPackage,
  //   updatePackage,
  deletePackage,
} = require("../controllers/package");

router.route("/").get(getAlllPackages).post(createPackage);
router.route("/static").get(getAllPackagesStatic);
router.route("/:id").get(getPackage).delete(deletePackage);
// .put(updatePackage);

module.exports = router;
