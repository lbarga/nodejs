const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
  if (err) throw err;

  console.log(data);

  fs.unlink("file.txt", (err) => {
    if (err) throw err;

    console.log("file deleted with success!");
  });
});
