// app.js
require("dotenv").config();

const express = require("express");
const sequelize = require("./config/db");
const packageRoutes = require("./routes/packageRoutes");
const popularPackageRoute = require("./routes/popularPackageRoutes");
const cors = require("cors");

const app = express();
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors());

// Middleware to delay response by 0.5 seconds
app.use((req, res, next) => {
  setTimeout(() => {
    console.log("passed");
    next(); // Call next() after 500ms
  }, 1000); // Delay of 0.5 seconds (500 milliseconds)
});

// Use the package routes
app.use("/api/v1/", packageRoutes);
app.use("/api/v1/popularPackages", popularPackageRoute);
// Sync Sequelize with MySQL
sequelize
  .sync({ alter: true }) // 'alter' ensures the table is updated with new changes
  .then(() => {
    console.log("Database synced");
    app.listen(3000, () =>
      console.log("Server running on http://localhost:3000"),
    );
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
