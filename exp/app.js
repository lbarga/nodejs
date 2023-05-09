const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
// app.use(express.static("public"));
app.use("/static", express.static("public"));

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

app.use((req, res, next) => {
  console.log(`running APPLICATION-LEVEL middleware`);

  return next();
});

app.get("/", (req, res) => {
  res.send("hellow world, page");
});

app.get("/setcookie", (req, res) => {
  res.cookie("user", "lukita", { maxAge: 900000, httpOnly: true });
  return res.send("cookie was successfully written!");
});

app.get("/getcookie", (req, res) => {
  let user = req.cookies["user"];
  if (user) {
    return res.send(user);
  }
});

app.get("/*", (req, res, next) => {
  setImmediate(() => {
    next(new Error("we have a problem"));
  });
});

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.use((err, req, res) => {
  console.log(err.stack);
  return res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log(`Server running: http://localhost:3000/`);
});
