let arr = [42, 7, 89, 13, 56, 24, 91, 3, 68, 35, 123, 123];

let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);
for (let i = 2; i < arr.length; i++) {
  if (max < arr[i]) {
    sMax = max;
    max = arr[i];
  } else if (sMax < arr[i] && max !== arr[i]) {
    sMax = arr[i];
  }
}
console.log(sMax);
