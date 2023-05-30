const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("admin, page");
});

router.get("/:id", (req, res) => {
  res.send(`admin, page with id: ${req.params.id}`);
});

router.post("/", (req, res) => {
  const body = `Login: ${req.body.login}\n
        Password: ${req.body.password}`;
  res.status(200).send("admin, page wit POST: " + body);
});

router.patch("/:id", (req, res) => {
  res.send(`accessing administration via PATCH: ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`accessing administration via PUT: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`accessing administration via DELETE: ${req.params.id}`);
});

module.exports = router;
