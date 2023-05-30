const { writeFile } = require("fs");

writeFile("file.txt", "creating text file with writeFile", (err) => {
  if (err) throw err;

  console.log("file created successfully!");
});
