const expres = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = expres();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  //   res.json({ message: "Welcome to upload-express application." });

  res.sendFile(__dirname + "/index.html");
});

app.post("/upload", upload.single("file"), (req, res, next) => {
  const file = req.file;

  if (!file) {
    const err = new Error("Please upload a file");
    err.httpStatusCode = 400;
    return next(err);
  }

  res.send(file);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
