const express = require("express");
const router = express.Router();

function logRoute(req, res, next) {
  console.log(`running ROUTE-LEVEL middleware: /user`);
  return next();
}

router.get("/", logRoute, (req, res) => {
  res.send("list of users");
});

router.get("/:id", logRoute, (req, res) => {
  res.send(`user details with id: ${req.params.id}`);
});

module.exports = router;
