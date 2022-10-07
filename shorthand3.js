
// OPTIONAL Write a function that takes 5 string arguments, and returns an object with 3 properties:

// first: the first argument
// last: the last argument
// middle: the middle 3 arguments as a sorted array
// After writing the function, write some code to call the function. The arguments you provide should come from an array. You should create local variables named first, last, and middle from the return value.

// Use shorthand syntax wherever you can.


function x(first, ...strArgs) {
  return {
    first,
    last: strArgs[strArgs.length - 1],
    middle: strArgs.slice(0, strArgs.length - 1).sort() 
  }
}

let { first, middle, last } = x('1st', '3rd', '2nd', '4th', '5th');

console.log(first, middle, last);