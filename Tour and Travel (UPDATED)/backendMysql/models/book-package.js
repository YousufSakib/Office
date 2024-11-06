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
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    isNew: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    tableName: "bookPackageForm",
    timestamps: true,
  }
);

module.exports = BookPackage;
//status
// 1 for Pending (waiting for confirmation or processing).
// 2 for Confirmed (the booking is confirmed).
// 3 for Completed (the trip or service has been completed).
// 0 for Canceled (the booking was canceled).
