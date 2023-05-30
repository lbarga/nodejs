const { EventEmitter } = require("events");

class Event extends EventEmitter {}

const myEvent = new Event();

// subscriber: can we have more than 1 subscriber
myEvent.on("security", (x, y) => {
  console.log(`Executing the event 'security': ${x} ${y}`);
});

myEvent.on("security", (x, y) => {
  console.log(`My second subscriber`);
});

// publisher
myEvent.emit("security", "userAdmin", "change salary");
