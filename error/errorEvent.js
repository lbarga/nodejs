const { EventEmitter } = require("events");

const emitter = new EventEmitter();

const validateObject = (obj) => {
  if (typeof obj !== "object") {
    emitter.emit("error", new Error("invalid object type!"));
  } else {
    console.log("valid object");
  }
};

emitter.addListener("error", (err) => {
  console.log("ErrorListener:", err.message);
});

const data = { name: "Hcode", course: "NodeJS" };

validateObject(data);
validateObject("data");
