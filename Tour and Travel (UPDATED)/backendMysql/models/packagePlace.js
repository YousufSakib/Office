const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PackagePlace = sequelize.define("PackagePlace", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  placeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  division: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  district: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = PackagePlace;
