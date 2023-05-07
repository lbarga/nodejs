const EventEmitter = require("events");

class Event extends EventEmitter {}

const myEvent = new Event();

myEvent.on("security", (x, y) => {
  console.log(`Executing the event 'security': ${x} ${y}`);
});

myEvent.emit("security", "userAdmin", "change salary");
