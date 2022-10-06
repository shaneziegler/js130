function onlyRunOnce() {
  let hasRun = false;

  return function() {
    if (hasRun) {
      console.log('fizzle');
    } else {
      hasRun = true;
      console.log('BOOM');
    }
  }
}

let boom1 = onlyRunOnce();
let boom2 = onlyRunOnce();

boom1();
boom1();
boom2();
boom1();
boom2();
