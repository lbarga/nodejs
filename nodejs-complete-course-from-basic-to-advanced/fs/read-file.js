const fs = require("fs");

fs.readFile("lorem.txt", (err, data) => {
  if (err) throw err;

  console.log(data.toString());
});
