 
 let arr = [42, 7, 89, 13, 56, 24, 91, 3, 68, 35, 123]
 let max = arr[0];
 for(let i = 0; i<=arr.length; i++){
       if(max < arr[i]){
        max = arr[i]
       }
 }
 console.log(max);
 