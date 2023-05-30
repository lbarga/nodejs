const { welcome } = require("./module-01");

const module01 = require("./module-01");

console.log("");

hidden();
execute();
console.log(welcome);

console.log("");

//module01.hidden(); // TypeError: module01.hidden is not a function
module01.execute();
console.log(module01.welcome);
