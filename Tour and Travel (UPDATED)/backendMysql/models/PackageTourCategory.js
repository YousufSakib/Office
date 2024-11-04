const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PackageTourCategory = sequelize.define(
  "PackageTourCategory",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categories: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    tableName: "package_tour_categories",
    timestamps: true,
  }
);

module.exports = PackageTourCategory;
