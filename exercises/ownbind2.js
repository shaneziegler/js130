// Function.prototype.bind is a method on all function objects that allows us to hard-bind a function to a particular object. The way this works is that you pass a context object to the bind method and it returns a new function that is essentially the same function but hard-bound to the context object supplied.

// Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.

function myBind(func, context, ...permArgs) {
  return function(...args) {
    func.apply(context, [...permArgs, ...args]);
  }
}

let obj = {
  state: true,
  method(val) {
    console.log(`Hello the state is: ${this.state} and ${val}`);
  }
}

obj.method('yo');

let x = obj.method;

x('doh');

let y = myBind(obj.method, obj);

y('yes');

let z = myBind(obj.method, obj, 'chungus');

z(99);
z();
