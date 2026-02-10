

let arr = [5, 12, 7, 20, 3, 15, 8, 1, 10, 6];

let max = arr[0]
for(let i = 1 ; i< arr.length ; i++){
    if(max < arr[i]){
         max = arr[i]
    }
}
console.log(max);
