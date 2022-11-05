function myBind(func, context) {
  return function(...args) { 
    return func.apply(context, args);
  }
}

let obj = { a: 'shane' };
let obj2 = {
  test(str) {
    console.log(str + " " + this.a);
  }
}
let x = myBind(obj2.test, obj);

x('hellllllo');
