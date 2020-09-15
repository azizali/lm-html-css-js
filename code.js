// Interpret
// Hoisting
// variables defined with `var` and function names are declared to the top of the File.

// console.log(a);   // a is not defined
// var a = 'LM';
// console.log(a);   // a is not defined

// fun();

// function fun (){
//   console.log('fun was run');
// }


// Accessing Dynamic key values from an object
// user[key] syntax
var arr = ['Superman', 'Batman'];
arr[0]

var user = {
  address: {
    street: '123',
    city: '456',
  },
  profile: {
    userName: 'lm',
    firstName: 'Liberty',
    lastName: 'Mutual',
    phone: 6304567899,
  }
}

// user.userName
// user['userName']
// user[variableName]

function valueGetter(key1, key2){
  return user[key1][key2]
  // return user.userName
}

console.log(valueGetter('profile', 'userName'))
console.log(valueGetter('address', 'street'))