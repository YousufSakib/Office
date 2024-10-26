const express = require("express");
const router = express.Router();
const { read, createOrUpdate } = require("../controllers/siteImages");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.UPLOAD_DIR || "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error("Only images are allowed"));
};

const upload = multer({ storage, fileFilter });

const handleMulterErrors = (err, req, res, next) => {
  if (
    err instanceof multer.MulterError ||
    err.message === "Only images are allowed"
  ) {
    return res.status(400).json({ error: err.message });
  }
  next(err);
};

router
  .route("/site-images")
  .get(read)
  .put(
    upload.fields([
      { name: "packageHeroImg", maxCount: 1 },
      { name: "aboutHeroImg", maxCount: 1 },
      { name: "homeHeroImg", maxCount: 1 },
      { name: "logo", maxCount: 1 },
      { name: "placesToVistHeroImg", maxCount: 1 },
      { name: "meetBangladeshHeroImg", maxCount: 1 },
      { name: "contactUsHeroImg", maxCount: 1 },
    ]),
    handleMulterErrors,
    createOrUpdate
  );

module.exports = router;
