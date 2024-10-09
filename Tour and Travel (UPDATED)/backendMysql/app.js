// app.js
require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db");
const packageRoutes = require("./routes/packageRoutes");
const popularPackageRoute = require("./routes/popularPackageRoutes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
// Use the package routes
app.use("/api/v1/", packageRoutes);
app.use("/api/v1/popularPackages", popularPackageRoute);
// Sync Sequelize with MySQL
sequelize
  .sync({ alter: true }) // 'alter' ensures the table is updated with new changes
  .then(() => {
    console.log("Database synced");
    app.listen(3000, () =>
      console.log("Server running on http://localhost:3000")
    );
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
