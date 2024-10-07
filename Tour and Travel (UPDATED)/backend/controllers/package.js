const Package = require("../models/package");

const getAllPackagesStatic = async (req, res) => {
  const packages = await Package.find();
  res.status(200).json({ packages, nbHits: packages.length });
};
const getAlllPackages = async (req, res) => {
  const { destination, duration, category } = req.query;
  const queryObject = {};

  if (destination) {
    queryObject.destination = destination;
  }
  if (duration) {
    queryObject.duration = duration;
  }
  if (category) {
    queryObject.category = category;
  }

  let result = Package.find(queryObject);

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const packages = await result;
  res.status(200).json({ packages, nbHits: packages.length });
};
const getPackage = async (req, res) => {
  const package = await Package.findOne({
    _id: req.params.id.substr(1),
  });
  if (!package) {
    return res.status(404).send(`No package with id ${id}`);
  }
  return res.status(200).json(package);
};
const createPackage = async (req, res) => {
  const package = await Package.create(req.body);
  console.log("sakib", package);
  if (!package) {
    throw new Error(`Database error`);
  }
  res.status(201).json({ package });
};

const deletePackage = async (req, res) => {
  const id = req.params.id.substr(1);
  const package = await Package.findByIdAndDelete({
    _id: id,
  });
  if (!package) {
    return res.status(404).send(`No package with id ${id}`);
  }
  return res.status(200).send("");
};

const updatePackage = async (req, res) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id.substr(1),
      req.body,
      {
        new: true, // This returns the updated document
        runValidators: true, // This ensures validation is run on the updated data
      },
    );
    if (!updatedPackage) {
      return res.status(404).json({ message: "Package not found" });
    }
    res.status(200).json(updatedPackage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createPackage,
  getAllPackagesStatic,
  getAlllPackages,
  updatePackage,
  deletePackage,
  getPackage,
};
