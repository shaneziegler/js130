function reduce(arr, func, initial) {
  let accum;
  let index;

  if (initial === undefined) {
    index = 1;
    accum = arr[0];
  } else {
    accum = initial;
    index = 0;
  }

  for(; index < arr.length; index++) {
    accum = func(accum, arr[index], index, arr);
  }
  return accum;
}



let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]