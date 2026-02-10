 function fibonacci (n){
   let prev = 0;
   let current = 1;
   let next ;
//    let series ;
   if(n< 2){
    return n;

   }
   for( let i = 2 ; i <=n ; i++){
       next = prev + current;
       prev = current
       current = next
       console.log(next);
       
   }
     return ;
 }
 console.log(fibonacci(6));
 