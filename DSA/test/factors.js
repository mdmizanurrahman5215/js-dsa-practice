 function factors (n){
  let factors = []
  for( let i = 1 ; i<=n ; i ++){
        for( let j = 1 ; j <=n; j++){
            if(i*j == n){
                factors.push(i)
            //    factors = [...factors, i]
             
               
            }

        }
  }
    console.log(factors);
 }
  factors(12)