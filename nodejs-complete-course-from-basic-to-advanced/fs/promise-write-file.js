const { writeFile } = require("fs");

function makeFile(name, content) {
  return new Promise((resolve, reject) => {
    writeFile(name, content, (err) => {
      if (err) return reject(err);

      resolve();
    });
  });
}

makeFile("promise-file.txt", "creating a file using promises")
  .then(() => {
    console.log(`file "promise-file.txt" created successfully!`);
  })
  .catch((err) => {
    console.log("error: ", err);
  });
