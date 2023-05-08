const Buffer = require("buffer").Buffer;

const buff = Buffer.from("NodeJS, Hello World!");

console.log(buff.toString());
console.log(buff.toString("utf16le"));

const buff_string = Buffer.from("Loading a string", "utf-8");
console.log(Buffer.isBuffer(buff_string));
console.log(buff_string.toString("utf-8", 0, 7));
