
// let arr = [1,2,3,4,5]
let arr = [5, 12, 7, 20, 3, 15, 8, 1, 10, 6];

 for(let j = 1 ; j<=2 ; j++){
    let copy = arr[0] 
 for(let i = 0; i<arr.length - 1 ; i++){
    arr[i] = arr[i+1]

}
arr[arr.length-1] = copy
 }


console.log(arr);
