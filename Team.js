const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Team = sequelize.define("Team", {
  name: DataTypes.STRING,
});

module.exports = Team;
