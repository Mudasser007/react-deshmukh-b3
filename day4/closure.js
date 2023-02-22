function init(){
    var name="Mozilla"; // name is local variable by init
function displayName(){
// displayName() is the inner function, that forms the closure
console.log(name);// use variable declared in the parent function    
}
displayName();
}
init();