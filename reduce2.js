// use reduce to emulate filter

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

function filter(arr, func) {
  let result = arr.reduce((acc, val) => {
    if (func(val)) acc.push(val);
    return acc;
  }, []);
  return result;
}

// let x = numbers.reduce((acc, curr) => {
//   if (curr > 3) acc.push(curr);
//   return acc;
// }, []);

// console.log();

// use reduce to emulate map

// let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values2 = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values2, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

function map(arr, func) {
  let result = arr.reduce((acc, val) => {
    acc.push(func(val));
    return acc;
  }, []);
  return result;
}