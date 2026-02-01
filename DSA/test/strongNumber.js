 
 function strongNumber (n){
    let copyNum = n;
    let sumOfFactors = 0;
    let digit;
  if(n<0) return "negetive number";
  if(n<=2) return true;

  while(copyNum > 0){
       digit = copyNum %10;  
       let factor = 1;
       for(let i = digit ; i> 0 ; i--){
         factor = factor*i
         
       }   
       sumOfFactors += factor;                                    
       copyNum = Math.floor(copyNum/10)
    }
    if(n === sumOfFactors){
      return true

    }
    else return false;
  
 }
 console.log(strongNumber(-1));
 