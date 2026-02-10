
const readline = require("readline")
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

const secret = Math.floor(Math.random()*10)+1;
// console.log(secret);

let attempts = 0;

function guessNumber(){
     rl.question("Enter your guess  ", (ans)=>{
      let guess = Number(ans)

       if(guess === secret){
        attempts ++ ;
       console.log(`Correct ! Number was ${secret}`);
       console.log(`Attempts = ${attempts}`);
       
       rl.close()
     }else if(guess < secret){
         attempts ++ ;
         console.log("Number os too low");
         guessNumber()
     }
     else{
         attempts ++ ;
        console.log("number is too high");
        guessNumber()
        
     }
     })

    
}
guessNumber()