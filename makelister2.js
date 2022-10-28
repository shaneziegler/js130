"use strict";

function makeMultipleLister(num) {
  if (Number.isInteger(num)) {
    return function() {
      for (let current = num; current < 100; current += num) {
        console.log(current);
      }
    }
  }

  console.log(`${num} is not a valid number`);
  return;
}


let lister = makeMultipleLister(17);
lister();