const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Image = sequelize.define(
  "Image",
  {
    packageHeroImg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aboutHeroImg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    homeHeroImg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "images",
    timestamps: false,
  },
);

module.exports = Image;
