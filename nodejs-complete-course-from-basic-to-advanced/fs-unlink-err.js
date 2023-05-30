const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
  if (err) throw err;

  console.log(data);
});

fs.unlinkSync("file.txt");
console.log("file deleted with success!");
