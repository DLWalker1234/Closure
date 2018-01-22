# Closure

Exploring the concept of Javascript closure to better my programming knowledge. Made inside the p5.js library for no particular reason.

## Javascript Closure Definition

### A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

Example: 

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();

## p5.js library

If interested you can download the p5.js lirbrary here
https://p5js.org/download/