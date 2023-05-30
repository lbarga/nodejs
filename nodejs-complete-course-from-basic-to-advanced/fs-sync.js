const fs = require("fs");

console.log((process.hrtime()[0] / 60).toFixed(5));
console.log("before: read the file");

const dados = fs.readFileSync("file.txt");

console.log("after: read the file");
console.log((process.hrtime()[0] / 60).toFixed(5));
