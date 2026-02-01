// let arr = [1,2,4,5]
// let newItem = 3;
// let index = 3;

// arr.length++

// for(i = arr.length-1 ; i>= 0; i--){
//  arr[i]= arr[i-1]
//  if(i == index){
//    arr[i] = newItem;
//    break;
//  }
// }
// console.log(arr);

let arr = [1,2,4,5]
arr.splice(2, 0, 7,8,9)
console.log(arr);
