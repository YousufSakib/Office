const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const CompanyInfo = sequelize.define("CompanyInfo", {
  companyName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  companyEmail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  companyPhoneNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  receptionOffice: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  receptionHours: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  latitude: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  longitude: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  facebookLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  instagramLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tweeterLink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  aboutUs: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = CompanyInfo;
