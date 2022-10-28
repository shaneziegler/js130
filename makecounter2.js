// > let countlog = makeCounterLogger(5);
// > countlog(8);
// 5
// 6
// 7
// 8

// > countlog(2);
// 5
// 4
// 3
// 2

function makeCounterLogger(start) {
  return (end) => {
    let adder = (end - start) > 0 ? 1 : -1;
    let counter = start;
    while(counter !== end) {
      console.log(counter);
      counter += adder;
    }
    console.log(counter);
  }  
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);
