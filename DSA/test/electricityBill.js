function electricityBill(unit) {
  if (unit <= 100) {
    return Math.floor(unit * 4.2);
  } else if (unit <= 200) {
    return Math.floor((unit - 100) * 6 + 100 * 4.2);
  } else if (unit <= 400) {
    return Math.floor((unit - 200) * 8 + 200 * 6 + 100 * 4.2);
  } else if (unit > 400) {
    return Math.floor((unit - 400) * 13 + 200 * 8 + 100 * 6 + 100 * 4.2);
  }
}
console.log(electricityBill(123));
