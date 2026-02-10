
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter number of rows: "));

for (let i = 1; i <= n; i++) {
  let row = "";

  // print spaces
  for (let s = 1; s <= n - i; s++) {
    row += "x ";
  }

  // print stars
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}
