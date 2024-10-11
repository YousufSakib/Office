const express = require("express");
const router = express.Router();
const Company = require("../models/company");

router.post("/companyInfo", async (req, res) => {
  try {
    const newCompany = await Company.create(req.body);
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read(GET);
router.get("/companyInfo/:id", async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    if (company) {
      res.status(200).json(company);
    } else {
      res.status(404).json({ message: "Company not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update (PUT)
router.put("/companyInfo/:id", async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    console.log("hi 5");
    if (company) {
      await company.update(req.body);
      res.status(200).json(company);
    } else {
      res.status(404).json({ message: "Company not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
// // Delete (DELETE)
// router.delete("/companyInfo/:id", async (req, res) => {
//   try {
//     const company = await Company.findByPk(req.params.id);
//     if (company) {
//       await company.destroy();
//       res.status(200).json({ message: "Company deleted" });
//     } else {
//       res.status(404).json({ message: "Company not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// router.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
