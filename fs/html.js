const http = require("http");
const { readFile } = require("fs");

const hostname = "127.0.0.1";
const port = 3000;
const url = `http://${hostname}:${port}/`;

let content = "";

readFile("index.html", (err, data) => {
  if (err) throw err;

  content = data;
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(content);
});

server.listen(port, hostname, () => {
  console.log(`Server running: ${url}`);
});

const open =
  (process.platform === "darwin" && "open") ||
  (process.platform === "wind32" && "start") ||
  (process.platform === "linux" && "xdg-open");

require("child_process").exec(open + " " + url);
