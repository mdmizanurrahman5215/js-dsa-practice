let a = 10;
let b = a;
b = 20;
console.log(a);
let obj1 = { x: 5 };
let obj2 = obj1;
obj2.x = 10;
console.log(obj1.x);

function modify(num, obj) {
  num = num * 2;
  obj.value = obj.value * 2;
}
var n = 5;
var o = { value: 5 };
modify(n, o);
console.log(num, o.value);
