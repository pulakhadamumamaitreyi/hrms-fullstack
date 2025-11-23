const router = require("express").Router();
const Employee = require("../models/Employee");
const Team = require("../models/Team");
const EmployeeTeam = require("../models/EmployeeTeam");
const auth = require("../middleware/auth");
const log = require("../middleware/logger");

router.post("/", auth, async (req, res) => {
  const emp = await Employee.create(req.body);
  log(`User '${req.user.id}' added employee ${emp.id}`);
  res.json(emp);
});

router.get("/", auth, async (req, res) => {
  const employees = await Employee.findAll({ include: Team });
  res.json(employees);
});

router.put("/:id", auth, async (req, res) => {
  await Employee.update(req.body, { where: { id: req.params.id } });
  log(`User '${req.user.id}' updated employee ${req.params.id}`);
  res.json({ msg: "Updated" });
});

router.delete("/:id", auth, async (req, res) => {
  await Employee.destroy({ where: { id: req.params.id } });
  log(`User '${req.user.id}' deleted employee ${req.params.id}`);
  res.json({ msg: "Deleted" });
});

module.exports = router;
