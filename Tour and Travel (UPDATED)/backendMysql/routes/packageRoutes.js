// routes/packageRoutes.js
const express = require("express");
const Package = require("../models/packageModel");
const router = express.Router();
const multer = require("multer");
const path = require("path");

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

      const imagePaths = req.files["images"].map((file) => ({
        src: path.basename(file.path),
      }));
      const createdBy = req.body.createdBy;
      const destination = req.body.destination;
      const duration = req.body.duration;
      const category = req.body.category;
      const name = req.body.name;
      const description = req.body.description;
      const tourHighLights = funcStringToArr_TourHighlight(
        req.body.tourHighLights,
      );
      const pricePerPerson = funcStringToArr(req.body.pricePerPerson);

      const input = req.body.attractions;
      const attractionsArray = input
        .replace(/"/g, "") // Remove double quotes
        .split(";") // Split by commas
        .map((attraction) => attraction.trim()); // Trim whitespace

      const attractions = attractionsArray.map((attraction) => ({
        attraction,
      }));

      const doc = {
        profileImg: profileImgPath,
        images: imagePaths,
        createdBy: createdBy,
        destination: destination,
        duration: Number(duration),
        category: category,
        name: name,
        description: description,
        attractions: attractions,
        tourHighLights: tourHighLights,
        pricePerPerson: pricePerPerson,
      };

      doc.images.forEach((element) => {
        element.key = Math.random().toString(16).slice(2);
      });
      doc.attractions.forEach((element) => {
        element.key = Math.random().toString(16).slice(2);
      });
      doc.tourHighLights.forEach((element) => {
        element.key = Math.random().toString(16).slice(2);
      });
      doc.pricePerPerson.forEach((element) => {
        element.key = Math.random().toString(16).slice(2);
      });

      const newPackage = await Package.create(doc);
      res.status(201).json(newPackage);
      console.log(newPackage);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  },
);
// {
//   "createdBy": "Yousuf",
//   "destination": "sylhet",
//   "duration": 9,
//   "category": "Hill view",
//   "name": "sylhet-jaflong",
//   "profileImg": "/pf/The-Sundarbans-350x230.gif",
//   "description": "Discover the enchanting Sundarbans and the historic mosque city of Bagerhat on a Bangladesh tour—2 UNESCO World Heritage Sites. Navigate waterways through lush mangrove forests, encountering Bengal tigers and diverse wildlife. Immerse in local culture, visit villages and witness the harmonious coexistence of nature and communities. A unique adventure awaits in this ecological wonderland. The Sundarbans mangrove forest is one of the most extensive single such forests in the world (140,000 ha). It lies on the delta of the Bay’s Ganges, Brahmaputra, and Meghna rivers of Bengal. It is adjacent to the border of India’s Sundarbans World Heritage Site inscribed in 1987. The site is intersected by a complex network of tidal waterways, mudflats, and small islands of salt-tolerant mangroves. It presents an excellent example of ongoing ecological processes. The area is known for its wide range of fauna, including 260 bird species, the man-eating Bengal tiger, and other threatened species such as the estuarine crocodile and the Indian python. Bagerhat, hosts the magnificent Sixty Dome Mosque, a UNESCO World Heritage Site. Built in the 15th century, it’s impressive architecture and intricate terracotta decorations reflect the region’s rich history.",
//   "images": [
//     {"src" : "/pf/Crocodile-of-Sundarban-768x576.jpg"},
//     {"src": "/pf/Jamtola-Sea-Beach-Sundarban-768x576.jpg"},
//     {"src": "/pf/Fishermen-Village-Sundarban-300x225.jpg"}
//   ],
//   "attractions": [
//     {"attraction": "Sixty Dome Mosque"},
//     {"attraction": "Shrine of Khan Jahan Ali"},
//     {"attraction": "Harbaria Eco-Tourism Center"}
//   ],
//   "tourHighLights":  [
//       {
//           "highlight": "UNESCO Heritages",
//           "description": "Visit two world heritages, Sundarbans and Sixty Dome Mosque in a single trip."
//       }
//   ],

//   "pricePerPerson": [
//       {
//           "priceType": "Starting Price",
//           "priceTaka": 4500
//       }
//   ]
// }

// Get all packages
router.get("/packages", async (req, res) => {
  try {
    const packages = await Package.findAll();
    res.status(200).json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a package by ID
router.get("/packages/:id", async (req, res) => {
  console.log("req : " + req.url);
  console.log("id: " + req.params.id);
  try {
    const package = await Package.findByPk(req.params.id);
    if (!package) return res.status(404).json({ message: "Package not found" });
    res.status(200).json(package);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a package
router.put("/packages/:id", async (req, res) => {
  try {
    const updatedPackage = await Package.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    if (updatedPackage[0] === 0)
      return res.status(404).json({ message: "Package not found" });
    res.status(200).json(updatedPackage[1][0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a package
router.delete("/packages/:id", async (req, res) => {
  try {
    const result = await Package.destroy({
      where: { id: req.params.id },
    });
    if (result === 0)
      return res.status(404).json({ message: "Package not found" });
    res.status(200).json({ message: "Package deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

function funcStringToArr(input) {
  // Step 1: Parse the input string into key-value pairs
  const inputObject = Object.fromEntries(
    input.split(";").map((item) => {
      const [key, value] = item
        .split(":")
        .map((part) => part.trim().replace(/"/g, ""));
      return [key, parseInt(value)]; // Convert value to integer
    }),
  );

  // Step 2: Convert the object into the desired output format
  const pricePerPerson = Object.entries(inputObject).map(
    ([priceType, priceTaka]) => ({
      priceType,
      priceTaka,
    }),
  );

  return pricePerPerson;
}
function funcStringToArr_TourHighlight(input) {
  // Step 1: Parse the input string into key-value pairs
  const inputObject = Object.fromEntries(
    input.split(";").map((item) => {
      const [key, value] = item
        .split(":")
        .map((part) => part.trim().replace(/"/g, ""));
      return [key, value]; // Convert value to integer
    }),
  );

  // Step 2: Convert the object into the desired output format
  const obj = Object.entries(inputObject).map(([highlight, description]) => ({
    highlight,
    description,
  }));

  return obj;
}
