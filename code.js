// -----------------------------
// Coersion
// -----------------------------
// var merged = false + '7';
// console.log(merged)

// var merged2 = 'Liberty Mutual' + ['value', 'value2', 12];
// console.log(merged2)


// -----------------------------
// Function
// -----------------------------
// Create/Declare a function
// Paramters are also called arguments
function greet(name, menuNumer) {
  // here is your code
  // bunch of code
  console.log('Hello ' + name);

}
console.log('Before greet execution')

// execute/run/call the function
greet('Patrick', 1);
greet('Mazahir');

var username = 'kellie';

greet(username);

// Example of usering function with optional parameters used
// function getUserPrevlidges(userId, userEmployeeId){

// }

// getUserPrevlidges(userId)
// getUserPrevlidges(123, 456)



function add(a, b){
  return a + b;
}

function multiply(a, b){
  console.log(a*b);
  return a * b;
}

var addedValue = add(5, 2);
console.log('addedValue', addedValue);

// Broken out in two steps
// var multipliedValue = multiply(addedValue, 3);
// console.log('multipliedValue', multipliedValue);

// Done in one step
// console.log('multipliedValue', multiply(addedValue, 3));

// console.log('more nesting', multiply(add(5,2), 3));



// Passing function as a parameter
function subtract(a, b){
  return a - b;
}

function divide (a, b){
  return a / b;
}

console.log(
  subtract(divide(200, 2), 40)
);
// ----------
function showUserProfile(fun, number){
  var funValue = fun();
  console.log(funValue, number);
}

// Employee login via internet
showUserProfile(function(){
  // to a database
  // check if user is authorized
  return 123;
}, 40)

// Employee login via company computer
showUserProfile(function(){
  // read info from file
  return 456;
}, 40)

function authenticateViaToken (){
  // do something
  return 789
} 

showUserProfile(authenticateViaToken, 40)