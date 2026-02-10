function palindrom(num) {
    let copyNum = num
  let reveresed = 0;
  if (copyNum < 0) return false;
  while (copyNum > 0) {
    reveresed = reveresed * 10 + (copyNum % 10);
    copyNum = Math.floor(copyNum / 10);
  }
  console.log(reveresed);
  console.log(num);
  
  
  if (num == reveresed) {
    return true;
  } else {
    return false
  };
}

console.log(palindrom(121));
