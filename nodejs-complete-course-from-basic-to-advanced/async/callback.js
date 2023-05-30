// v1
// function sum(x) {
//   return x + 5000;
// }

// v2
// function sum(x) {
//   return setTimeout(() => {
//     return x + 5000;
//   }, 3000);
// }

// function read() {
//   console.log("Read function execution: ", sum(270));
// }

// read();

// v3
function sum(x, callback) {
  return setTimeout(() => {
    return callback(null, x + 5000);
  }, 3000);
}

// callback function
function solveSum(err, result) {
  if (err) throw err;

  console.log(result);
}

sum(200, solveSum);
