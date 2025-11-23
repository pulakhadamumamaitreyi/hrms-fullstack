const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("hrms", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
