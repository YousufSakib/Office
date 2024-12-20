require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const sequelize = require("./config/db");

const packageRoutes = require("./controllers/packageRoutes");
const companyInfoRouter = require("./routes/companyInfo");
const imagesRoute = require("./routes/siteImages");
const contactRoute = require("./controllers/contactRoute");
const packagePlaces = require("./routes/packagePlace");
const packageTourCategory = require("./routes/PackageTourCategory");
const bookPackage = require('./routes/book-package');

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  // console.log(req.url);
  // console.log(req.method);
  next();
});
app.use("/uploads", express.static("uploads"));

// Middleware to delay response by 1 seconds
app.use((req, res, next) => {
  setTimeout(() => {
    next(); // Call next() after 500ms
  }, 500); // Delay of 0.5 seconds (500 milliseconds)
});

// Use the package routes

app.use("/api/v1", imagesRoute);
app.use("/api/v1", packageRoutes);
app.use("/api/v1", companyInfoRouter);
app.use("/api/v1", contactRoute);
app.use("/api/v1", packagePlaces);
app.use("/api/v1", packageTourCategory);
app.use('/api/v1', bookPackage);

app.use("/", (req, res) => {
  res.status(200).json({
    message: "Hello, Your app is working",
  });
});
// Sync Sequelize with MySQL
sequelize
  .sync({ alter: true }) // 'alter' ensures the table is updated with new changes
  .then(() => {
    console.log("Database synced");
    app.listen(process.env.PORT || 3003, () =>
      console.log(
        `Server running on http://localhost:${process.env.PORT || 3003}`
      )
    );
    // app.listen();
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
