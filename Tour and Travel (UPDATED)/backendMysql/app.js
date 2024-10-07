// app.js
require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db");
const packageRoutes = require("./routes/packageRoutes");
const app = express();
app.use(express.json());

// Use the package routes
app.use("/api/v1/", packageRoutes);

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
