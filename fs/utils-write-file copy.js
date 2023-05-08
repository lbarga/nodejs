const { promisify } = require("util");

const writeFile = promisify(require("fs").writeFile);

const content = "creating a file using promisify from the util native module";

writeFile("util-file.txt", content)
  .then(() => {
    console.log(`file "util-file.txt" created successfully!`);
  })
  .catch((err) => {
    console.log("error: ", err);
  });
