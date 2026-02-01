function outer() {
  let count = 0; // outer variable

 return function inner() { // inner function forms a closure
    count++;
    console.log(count);
    if(count == 4){
      return;
    }
     inner()
  }
 
}

let fn =outer();
fn()


