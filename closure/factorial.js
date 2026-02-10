function factorial() {
  let attempts = 0;

  return function inner(n) {
    attempts++;

    if (n <= 1) {
      console.log("Total Attempts:", attempts);
      return 1;
    }
     
    return n * inner(n - 1);
  };
}

const fn = factorial();
console.log(fn(5)); // 120
