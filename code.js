//-----------------
// INTRO TO LET AND CONST
//-----------------
// var a = 'LM';
// let b = 'LM';
// const c = 'LM';

// console.log(a, b, c);
// a = 'ML';
// console.log(a);

// b = 'ML';
// console.log(b);

// c = 'ML';
// console.log(c);

//-----------------
// BLOCK SCOPE EXAMPLE WITH FOR
//-----------------
// for(let i = 0; i<10; i++){
  //   console.log(i);
  // }
  // console.log('outside', i);
  
//-----------------
// BLOCK SCOPE EXAMPLE WITH IF
//-----------------
// if(true){
//   let val = 'val'
//   console.log('Inside If', val);
// }
// console.log('Outside If', val);

//-----------------
// const: Change value vs re-assigning value
//-----------------
// const o = {
//   key: 'value'
// }

// o.anotherKey = 'anotherValue'
// o.key = 'new value';

// console.log(o);

// // o = {
// //   key: 'value'
// // }


// const arr = ['a', 'b', 'c'];

// arr[0] = 'x'
// arr[2] = 'z';

// console.log(arr);

// ------------
// Var let and const global scope
// ------------
var a = 'LM';
let b = 'LM';
const c = 'LM';

window.myValue = 'myValue';