function makeCounter() {
  let counter = 0;

  const increment1 = function() {
    counter += 1;
    return counter;
  }

  const increment2 = function() {
    counter += 2;
    return counter;
  }

  const incrementX = function(adder) {
    counter += adder;
    return counter;
  }

  const getCounter = function() {
    return counter;
  }
  return [increment1, increment2, incrementX, getCounter];
}

let [increment1, increment2, incrementX, getCounter]  = makeCounter();
let [junk1, junk2, junk3, getCounter2]  = makeCounter();

increment1();
console.log(getCounter()); // 1
increment2();
console.log(getCounter()); // 3
incrementX(5);
console.log(getCounter()); // 8
increment2();
console.log(getCounter()); // 10
console.log(getCounter2()); // 0