// config/db.js
const { Sequelize } = require("sequelize");

// Connect to MySQL database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  },
);

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("Connected to MySQL"))
  .catch((err) => console.error("Unable to connect to MySQL:", err));

module.exports = sequelize;
