require("./subdirectory.js/sub.js");

console.log("");
console.log("-----------------------");
console.log("");
console.log("file name: ", __filename);
console.log("directory name: ", __dirname);
console.log("execution params: ", process.argv);
console.log("");
console.log("current directory: ", process.cwd()); //only windows
console.log("operational system: ", process.env.OS); //only windows
console.log("OS user: ", process.env.USERNAME);
console.log("language: ", process.env.LANG);
console.log("server name: ", process.env.COMPUTERNAME);
console.log("");

const argument = process.argv[2];
switch (argument) {
  case "-a":
    console.log("Execute main routine");
    break;
  case "-i":
    console.log("Execute instalation");
    break;
  case "-q":
    console.log("Ending application");
    process.exit(); // stop the code immediately
    break;
  default:
    break;
}
console.log("");

console.log("enviroment server: ", process.platform);
