const CompanyInfo = require("../models/companyInfo");

// Read (GET)
const readInfo = async (req, res) => {
  try {
    const company = await CompanyInfo.findOne();
    if (company) {
      res.status(200).json(company);
    } else {
      res.status(404).json({ message: "Company not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Create or Update Company Info (PUT)
const createOrUpdateInfo = async (req, res) => {
  try {
    const company = await CompanyInfo.findOne();
    if (company) {
      // If it exists, update it
      await CompanyInfo.update(req.body, { where: {} }); // No need for a condition since there's only one row
      res.status(200).json({ message: "Company info updated successfully." });
    } else {
      // If it doesn't exist, create it
      await CompanyInfo.create(req.body);
      res.status(201).json({ message: "Company info created successfully." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createOrUpdateInfo, readInfo };
