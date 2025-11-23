const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Employee = require("./Employee");
const Team = require("./Team");

const EmployeeTeam = sequelize.define("EmployeeTeam", {});

Employee.belongsToMany(Team, { through: EmployeeTeam });
Team.belongsToMany(Employee, { through: EmployeeTeam });

module.exports = EmployeeTeam;
