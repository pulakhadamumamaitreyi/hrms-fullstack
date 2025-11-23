const fs = require("fs");
const path = "./logs.txt";

function log(message) {
  const timestamp = new Date().toISOString();
  fs.appendFileSync(path, `[${timestamp}] ${message}\n`);
}

module.exports = log;
