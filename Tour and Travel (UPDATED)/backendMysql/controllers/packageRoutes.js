// routes/packageRoutes.js
const express = require("express");
const Package = require("../models/packageModel");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const imagesToDelete = require("../lib/deleteExistingPhotos");

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Create a package
const upload = multer({ storage });
router.post(
  "/packages",
  upload.fields([{ name: "profileImg" }, { name: "images" }]),
  async (req, res) => {
    try {
      const profileImgPath = path.basename(req.files["profileImg"][0].path);
      // const imagePaths = req.files["images"].map((file) =>
      // path.basename(file.path)
      // );
      const imagePaths = req.files["images"].map((file) => ({
        src: path.basename(file.path),
        key: Math.random().toString(16).slice(2),
      }));

      const doc = {
        ...req.body,
        profileImg: profileImgPath,
        images: imagePaths,
      };

      //console.log("The new package object is going to created");
      //console.log(doc);
      // return;
      const newPackage = await Package.create(doc);
      res.status(201).json(newPackage);
    } catch (err) {
      //console.log(err);
      res.status(400).json({ message: err.message });
    }
  }
);

router.get("/popularPackages", async (req, res) => {
  try {
    const { rows } = await Package.findAndCountAll({ offset: 0, limit: 5 });

    //console.log(rows);

    res.status(200).json({
      data: rows,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get packages (paginated)
router.get("/packages", async (req, res) => {
  const DEFAULT_PAGE = 1;
  const DEFAULT_LIMIT = 8;

  if (req.query.field === undefined) {
    try {
      const page = parseInt(req.query.page, 10) || DEFAULT_PAGE;
      const limit = parseInt(req.query.limit, 10) || DEFAULT_LIMIT;

      // Ensure pagination numbers are valid and not negative
      if (page < 1) page = DEFAULT_PAGE;
      if (limit < 1 || limit > 100) limit = DEFAULT_LIMIT; // Set max limit to prevent large payloads

      const offset = (page - 1) * limit;
      let { rows } = await Package.findAndCountAll({});

      const fakeDocument = rows.map((obj) => ({
        id: obj.dataValues.id,
        destination: JSON.parse(obj.dataValues.destination).map((a) => a.place),
        discount: obj.dataValues.discount,
        duration: `${obj.dataValues.duration} days`,
        category: JSON.parse(obj.dataValues.category).map((a) => a.category),
        pricePerPerson: JSON.parse(
          JSON.parse(obj.dataValues.pricePerPerson)
        ).map((a) => a.priceTaka),
      }));
      const setOfselectedIds = new Set();
      const attributes = ["destination", "duration", "category"];
      attributes.forEach((item) => {
        if (req.query[item]) {
          let searchArr = [];
          if (!Array.isArray(req.query[item])) searchArr.push(req.query[item]);
          else searchArr = req.query[item];
          searchArr.forEach((word) => {
            // console.log(`${item} : ${word}`);
            fakeDocument.forEach((obj) => {
              if (Array.isArray(obj[item])) {
                if (obj[item].includes(word)) setOfselectedIds.add(obj.id);
              } else {
                if (obj[item] === word) setOfselectedIds.add(obj.id);
              }
            });
          });
        }
      });

      const isQueryPresent = attributes.some((attr) => req.query[attr]);
      if (!isQueryPresent && setOfselectedIds.size === 0) {
        fakeDocument.forEach((obj) => {
          setOfselectedIds.add(obj.id);
        });
      }

      const arrayOfSelectedIds = [...setOfselectedIds];
      const sendToClient = arrayOfSelectedIds.slice(offset, offset + limit);

      const totalPages = Math.ceil(arrayOfSelectedIds.length / limit);

      filteredRows = rows.filter((row) =>
        sendToClient.includes(row.dataValues.id)
      );

      res.status(200).json({
        data: filteredRows,
        pagination: {
          totalItems: sendToClient.length,
          totalPages,
          currentPage: page,
          pageSize: limit,
        },
      });
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    try {
      const packages = await Package.findAll({
        attributes: req.query.field,
        where: {},
        order: [["name", "ASC"]],
      });
      console.log(req.query);
      res.status(200).json({ data: packages });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

// Get a package by ID
router.get("/packages/:id", async (req, res) => {
  try {
    const package = await Package.findByPk(req.params.id);
    if (!package) return res.status(404).json({ message: "Package not found" });
    res.status(200).json(package);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update a package
router.put(
  "/packages/:id",
  upload.fields([{ name: "profileImg", maxCount: 1 }, { name: "images" }]),

  async (req, res) => {
    try {
      const packageEntry = await Package.findByPk(req.params.id);

      const uploadedImages = req.files["images"]
        ? req.files["images"].map((file) => ({
            src: path.basename(file.path), // Get the file name
            key: Math.random().toString(16).slice(2), // Generate a unique key
          }))
        : []; // Default to an empty array if no images were uploaded

      //console.log("uploaded images");
      //console.log(typeof uploadedImages);
      //console.log(uploadedImages);

      const existingImageSrc = req.body["existingImages"]
        ? Array.isArray(req.body["existingImages"])
          ? req.body["existingImages"]
          : [req.body["existingImages"]]
        : [];

      const existingImages = existingImageSrc.map((src) => ({
        src, //images src
        key: Math.random().toString(16).slice(2), // Generate a unique key
      }));

      //console.log("existing images");
      //console.log(typeof existingImages);
      //console.log(existingImages);

      const allImages = uploadedImages.concat(existingImages); // Combine both arrays

      const profileImg =
        req.files["profileImg"] && req.files["profileImg"].length > 0
          ? path.basename(req.files["profileImg"][0].path)
          : req.body.existingProfileImg;

      if (packageEntry) {
        const prevGalleryImages = JSON.parse(packageEntry.images).map(
          (obj) => obj.src
        );
        const prevProfileImage = packageEntry.profileImg;

        await packageEntry.update({
          profileImg,
          images: allImages,
          ...req.body,
        });

        //Now delete the unnecessary images
        // return;

        const unnecessaryImages = prevGalleryImages.filter(
          (src) => !existingImageSrc.includes(src)
        );
        //if profile img changes, then delete previous profile img;
        req.files["profileImg"] && req.files["profileImg"].length > 0
          ? unnecessaryImages.push(prevProfileImage)
          : "";
        //console.log("unnecessaryImages");
        //console.log(unnecessaryImages);
        imagesToDelete.deleteSpecifiedImages(unnecessaryImages);
      } else {
        return res.status(404).json({ message: "Package not found" });
      }
      return res.status(200).json({ message: "Package updated successfully" });
    } catch (err) {
      //console.log(err);
      res.status(500).json({ message: err.message });
    }
  }
);

// Delete a package
router.delete("/packages/:id", async (req, res) => {
  try {
    const packageEntry = await Package.findByPk(req.params.id);
    if (packageEntry) {
      const prevGalleryImages = JSON.parse(packageEntry.images).map(
        (obj) => obj.src
      );
      const prevProfileImage = packageEntry.profileImg;
      //console.log("prevProfileImage");
      //console.log(typeof prevProfileImage);
      //console.log(prevProfileImage);

      //console.log("prevGalleryImages");
      //console.log(typeof prevGalleryImages);
      //console.log(prevGalleryImages);

      prevGalleryImages.push(prevProfileImage);
      const unnecessaryImages = prevGalleryImages;
      //console.log("hi", unnecessaryImages);
      // return;
      imagesToDelete.deleteSpecifiedImages(unnecessaryImages);
    } else {
      return res.status(404).json({ message: "Package not found" });
    }

    const result = await Package.destroy({
      where: { id: req.params.id },
    });

    res.status(200).json({ message: "Package deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
