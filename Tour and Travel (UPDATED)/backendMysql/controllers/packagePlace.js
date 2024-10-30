const PackagePlace = require('../models/packagePlace');

// Create a new package place
exports.createPackagePlace = async (req, res) => {
  try {
    //console.log(req.body);
    const { place } = req.body; // Expecting place to be a JSON object
    const newPlace = await PackagePlace.create({ ...req.body });
    res.status(201).json({ message: 'Package place created successfully', data: newPlace });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating package place', error: error.message });
  }
};

// Get all package places
exports.getAllPackagePlaces = async (req, res) => {
  try {
    const places = await PackagePlace.findAll();
    res.status(200).json(places);
    //console.log(places);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching package places', error: error.message });
  }
};
