"use strict";

let obj = {};
let boundFunc = bind(obj, function(test) {
  this.foo = "bar";
  console.log(test);
});

boundFunc('shane');
console.log(obj); // { foo: 'bar' }

function bind(context, func) {
  return function(...args) {
    func.call(context, ...args);
  };
}