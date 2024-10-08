const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Package = sequelize.define("PopularPackage", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  link: {
    type: DataTypes.STRING,
  },
  src: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  days: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Package;
