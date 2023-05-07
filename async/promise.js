function sum(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 5000);
    }, 3000);
  });
}

sum(200).then((result) => console.log(`Resolved result: ${result}`));
