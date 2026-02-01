
function createUser(name){
   
    return function getName(){
       return `hello ${name}`;
       
    }
}
const fn = createUser("mizan")
fn()
