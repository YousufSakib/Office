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
  const {
    params: { id: packageId },
  } = req;
  const package = await Package.findOne({
    _id: packageId,
  });
  if (!package) {
    return res.status(404).send(`No package with id ${packageId}`);
  }
};
const createPackage = async (req, res) => {
  //   req.body.createdBy = req.user.userId;
  //   console.log(req.body);
  const package = await Package.create(req.body);
  console.log("sakib", package);
  if (!package) {
    throw new Error(`Database error`);
  }
  res.status(201).json({ package });
};

const deletePackage = async (req, res) => {
  let {
    params: { id: packageId },
  } = req;

  packageId = packageId.substring(1);
  console.log(packageId);

  console.log("sakib" + packageId);
  const package = await Package.findByIdAndDelete({
    _id: packageId,
  });
  if (!package) {
    return res.status(404).send(`No package with id ${packageId}`);
  }
  return res.status(200).send("");
};

// const updatePackage = async (req, res) => {
//   let {
//     body: {
//       createdBy,
//       destination,
//       duration,
//       category,
//       name,
//       profileImg,
//       description,
//       images,
//       attraction,
//       tourHighLights,
//       pricePerPerson,
//     },
//     params: { id: packageId },
//     // createdBy: { userId },
//   } = req;
//   packageId = packageId.substring(1);
//   console.log(req.body);
//   //   console.log(packageId);
//   //   console.log(req.params);

//   const doc = await Package.findOne({ _id: packageId });
//   doc.createdBy = createdBy;
//   doc.destination = destinationl;
//   doc.duration = duration;
//   doc.category = category;
//   doc.name = name;
//   doc.profileImg = profileImg;
//   doc.description = description;
//   doc.images = images;
//   doc.attraction = attraction;
//   doc.tourHighLights = tourHighLights;
//   doc.pricePerPerson = pricePerPerson;

//   await Package.save();
//   const doc = await Package.findOne({ _id: packageId });
//   const package =
//   if (!package) {
//     return res.status(404).send(`No package with id ${packageId}`);
//   }
//   res.status(200).json({ package });
// };

module.exports = {
  createPackage,
  getAllPackagesStatic,
  getAlllPackages,
  //   updatePackage,
  deletePackage,
  getPackage,
};
