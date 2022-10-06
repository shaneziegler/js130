function makeMultipleLister(num) {
  return function() {
    for (let i = num; i < 100; i+= num) {
      console.log(i);
    }
  }
}


let lister = makeMultipleLister(17);
lister();

// 17
// 34
// 51
// 68
// 85