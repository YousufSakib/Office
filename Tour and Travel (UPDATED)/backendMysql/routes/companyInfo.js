const express = require("express");
const router = express.Router();
const { readInfo, createOrUpdateInfo } = require("../controllers/companyInfo");

router.route("/companyInfo").get(readInfo).put(createOrUpdateInfo);

module.exports = router;
