const path = require("path");

console.log("basename: ", path.basename("c:\\temp\\index.html"));
console.log("normalize: ", path.normalize("c:\\temp//subdir/dir/.."));
console.log(
  "join path: ",
  path.join("/test", "test2", "test3/test4", "dir2", ".")
);
console.log("resolve: ", path.resolve("path.js"));
console.log("extension: ", path.extname("path.js"));
