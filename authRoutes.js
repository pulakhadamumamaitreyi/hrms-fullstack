const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const log = require("../middleware/logger");

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);
  await User.create({ email, password: hash });

  log(`User '${email}' registered.`);
  res.json({ msg: "Registered" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ msg: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(403).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user.id }, "secret123");

  log(`User '${email}' logged in.`);
  res.json({ token });
});

module.exports = router;
