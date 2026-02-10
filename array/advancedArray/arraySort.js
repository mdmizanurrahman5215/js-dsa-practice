
// let arr = [5, 12, 7, 20, 3, 15, 8, 1, 10, 6];
// arr.sort((a,b)=>a-b)

let arr = [1, 3, 5, 5,5, 6,]

 let j = 1
for( let i = 0; i<arr.length -1 ; i++){
  
   if(arr[i] !== arr [i+1]){
      arr[j] = arr[i+1]
      j++
   }
}
console.log(j);
