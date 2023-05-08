// const fs = require("fs");

// fs.mkdir("project/assets/images", { recursive: true }, (err) => {
//   if (err) throw err;

//   console.log("directory created successfully!");
// });

const fs = require("fs");

const assets = ["css", "js", "images", "fonts", "lib"];

function make(dir) {
  dir.forEach((item) => {
    fs.mkdir(`project/assets/${item}`, { recursive: true }, (err) => {
      if (err) throw err;

      console.log(`directory created successfully: ${item}`);
    });
  });
}

make(assets);
