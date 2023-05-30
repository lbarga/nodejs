function execute() {
  executeTo();
}

function executeTo() {
  throw new Error("In my machine works!!!");
}

function init() {
  try {
    execute();
  } catch (err) {
    console.log(`Alert: ${err}`);
  }
}

init();

console.log("After the error.");
