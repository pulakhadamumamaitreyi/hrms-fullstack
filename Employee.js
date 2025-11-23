const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Employee = sequelize.define("Employee", {
  name: DataTypes.STRING,
  role: DataTypes.STRING,
});

module.exports = Employee;
