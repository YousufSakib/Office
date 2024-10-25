const CompanyInfo = require("../models/companyInfo");

// Read (GET)
const readInfo = async (req, res) => {
  try {
    const companyInfo = await CompanyInfo.findOne();
    if (companyInfo) {
      res.status(200).json(companyInfo);
    } else {
      res.status(404).json({ message: "Company info not found" });
    }
  } catch (error) {
    console.error("Database error while fetching info:", error);
    res
      .status(500)
      .json({ error: "Internal server error. Failed to fetch company info" });
  }
};

// Create or Update Company Info (PUT)
const createOrUpdateInfo = async (req, res) => {
  try {
    const company = await CompanyInfo.findOne();
    if (company) {
      // If it exists, update it
      await CompanyInfo.update(req.body); // No need for a condition since there's only one row
      res.status(200).json({ message: "Company info updated successfully." });
    } else {
      // If it doesn't exist, create it
      await CompanyInfo.create(req.body);
      res.status(201).json({ message: "Company info created successfully." });
    }
  } catch (error) {
    console.error("Error updating company info", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createOrUpdateInfo, readInfo };
