require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const sequelize = require("./config/db");

const packageRoutes = require("./controllers/packageRoutes");
const companyInfoRouter = require("./routes/companyInfo");
const imagesRoute = require("./controllers/imagesRoute");
const contactRoute = require("./controllers/contactRoute");

const cors = require("cors");

const app = express();
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Middleware to delay response by 0.5 seconds
// app.use((req, res, next) => {
//   setTimeout(() => {
//     console.log("passed");
//     next(); // Call next() after 500ms
//   }, 1000); // Delay of 0.5 seconds (500 milliseconds)
// });
app.use((req, res, next) => {
  console.log(req.url);
  console.log(req.method);
  next();
});
// Use the package routes
app.use("/api/v1", imagesRoute);
app.use("/api/v1", packageRoutes);
app.use("/api/v1", companyInfoRouter);
app.use("/api/v1", contactRoute);
// Sync Sequelize with MySQL
sequelize
  .sync({ alter: true }) // 'alter' ensures the table is updated with new changes
  .then(() => {
    console.log("Database synced");
    app.listen(3001, () =>
      console.log("Server running on http://localhost:3001")
    );
    // app.listen();
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
