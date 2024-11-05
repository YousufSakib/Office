const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const BookPackage = sequelize.define(
  "BookPackage",
  {
    packageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    travellerNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "bookPackageForm",
    timestamps: true,
  }
);

module.exports = BookPackage;
