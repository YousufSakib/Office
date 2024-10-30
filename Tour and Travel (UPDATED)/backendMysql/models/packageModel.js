const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Package = sequelize.define("Package", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profileImg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  images: {
    type: DataTypes.JSON,
  },
  tourHighLights: {
    type: DataTypes.JSON,
  },
  pricePerPerson: {
    type: DataTypes.JSON,
  },
});

module.exports = Package;
