console.log("show a message in console");

// error
console.error(new Error("show an error message in console"));

const cars = ["GM", "FIAT", "FORD", "VW", "Renault", "Honda", "Hyundai"];

console.table(cars);

const data = { name: "Glaucio Daniel", empresa: "Hcode" };

console.table(data);

console.count("process");
console.count("process");
console.count("process");
console.count("process");
console.log("reset processes");
console.countReset("process");
console.count("process");

console.log("");

console.time("counter");
for (let index = 0; index <= 1000000; index++) {}
console.timeEnd("counter");

console.log("");

console.assert(true, "do something:");
console.assert(false, "warnning", "doesnt work");

console.log("");

// cleaning console
// console.clear();
