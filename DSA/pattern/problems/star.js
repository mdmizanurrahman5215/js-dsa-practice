const prompt = require("prompt-sync")();
const n = Number(prompt("Enter Numner : "));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if ((i == j)) {
      process.stdout.write("* ");
      
    } else if (i+j == n+1){
      process.stdout.write("* ");
    }
    else{
        process.stdout.write("  ");
    }


  }
  console.log();
  
}
