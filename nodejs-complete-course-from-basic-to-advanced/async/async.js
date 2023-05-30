function sum(number) {
  return new Promise((resolve, reject) => {
    if (
      Number(number) === NaN ||
      Number(number === undefined || typeof number != "number")
    ) {
      reject("param is not a number!");
      return;
    }

    setTimeout(() => {
      resolve(number + 5000);
    }, 3000);
  });
}

async function main() {
  try {
    const result = await sum("200");

    console.log(`Resolved result with async/await: ${result}`);
  } catch (error) {
    console.log(`We have problems: ${error}`);
  }
}

main();
