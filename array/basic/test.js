let arr = [1,2,3,4,5];

for (let i = 0; i < arr.length; i++) {
  for (let j = arr.length - 1; j >= 0; j--) {
    arr[i] = arr[j];
  }
}

console.log(arr);
