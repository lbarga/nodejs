console.log(`executing "module-01.js"`);

hidden = () => {
  console.log("executing hidden function");
};

execute = () => {
  console.log('executing function "execute"');
};

welcome = `welcome to module-01!`;

module.exports = {
  execute,
  welcome,
};
