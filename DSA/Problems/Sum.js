
function sumAllNaturalNumber (number){
    let sum = 0;
    for(i = 1; i <= number ; i++){
      sum = sum + i;
    }
    return sum
}
console.log(sumAllNaturalNumber(5));
