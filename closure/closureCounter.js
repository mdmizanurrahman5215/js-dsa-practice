
function closureCounter(){
    let counter = 0;
   return function(){
           counter +=2;
           console.log(counter);
           
    }
}

const fn = closureCounter()
fn();
fn();
fn();
fn();
fn();
