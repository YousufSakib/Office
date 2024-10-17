const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const CompanyInfo = sequelize.define(
  "CompanyInfo",
  {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyPhoneNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    receptionOffice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    receptionHours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.STRING,
    },
    longitude: {
      type: DataTypes.STRING,
    },
    facebookLink: {
      type: DataTypes.STRING,
    },
    instagramLink: {
      type: DataTypes.STRING,
    },
    tweeterLink: {
      type: DataTypes.STRING,
    },
    aboutUs: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "companies",
    timestamps: false,
  },
);

module.exports = CompanyInfo;
