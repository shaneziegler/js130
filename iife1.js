// thousands of lines of messy JavaScript code!

let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
let largest = -Infinity;
for (let index = 0; index < array.length; index += 1) {
  if ((array[index] % 2) === 0 && (array[index] > largest)) {
    largest = array[index];
  }
}

// let largest = Math.max(...array);
console.log(largest); // 24

// more messy JavaScript code

