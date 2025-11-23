const express = require("express");
const sequelize = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const teamRoutes = require("./routes/teamRoutes");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/employees", employeeRoutes);
app.use("/teams", teamRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => console.log("Server running on 5000"));
});
