//  let arr = [42, 7, 89, 13, 56, 24, 91, 3, 68, 35, 123]
//  let arr = [1,2,3,4,5]
// let reverse = new Array(arr.length)
// let j = 0
// for(let i = arr.length-1 ; i>= 0 ; i--){
//      reverse[j]=(arr[i])
//      j++
// }
// console.log(reverse);

//  let arr = [1,2,3,4,5]
// let reverse = []
// let j = 0
// for(let i = arr.length-1 ; i>= 0 ; i--){
//      reverse[j]=(arr[i])
//      j++
// }
// console.log(reverse);

let arr = [1, 2, 3, 4, 5];

let i = 0;
let j = arr.length - 1;
while (i !== j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  j--;
  i++;
}

console.log(arr);
