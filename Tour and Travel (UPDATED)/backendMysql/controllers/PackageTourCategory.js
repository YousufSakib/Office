const PackageTourCategory = require("../models/PackageTourCategory");

// Create or update package tour categories
exports.addCategory = async (req, res) => {
  const { category, key } = req.body; // Expecting category to be a string

  // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  // console.log({ category, key });
  try {
    // Check if a record already exists
    let categoryRecord = await PackageTourCategory.findOne();

    if (!categoryRecord) {
      // If no record exists, create a new one with the first category
      categoryRecord = await PackageTourCategory.create({
        categories: [{ category, key }],
      });
      return res.status(201).json({
        message: "Category created successfully",
        data: categoryRecord,
      });
    }

    // If a record exists, append the new category

    const updatedCategories = [
      ...JSON.parse(categoryRecord.categories),
      { category, key },
    ];
    categoryRecord.categories = updatedCategories;

    await categoryRecord.save();
    res
      .status(200)
      .json({ message: "Category updated successfully", data: categoryRecord });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error updating categories", error: error.message });
  }
};

// Read the current categories
exports.getCategories = async (req, res) => {
  try {
    const categoryRecord = await PackageTourCategory.findOne();

    if (!categoryRecord) {
      return res.status(404).json({ message: "No categories found" });
    }
    res.status(200).json(categoryRecord);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching categories", error: error.message });
  }
};
