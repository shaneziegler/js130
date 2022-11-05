function myBind(func, context, ...args) {
  return function(...currentArgs) {
    currentArgs = args.concat(currentArgs);
    return func.apply(context, currentArgs);
  }
}

let obj = { a: 'shane' };
let obj2 = {
  test(str) {
    console.log(str + " " + this.a);
  },
  test2(arg1, arg2) {
    console.log(arg1 * arg2);
  }
}
let x = myBind(obj2.test, obj);

x('hellllllo');

obj2.test2(2, 3);

let y = myBind(obj2.test2, null, 5);

y(10);

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15