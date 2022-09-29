let arr = [1, 2, 3, 4];

// Array.prototype.forEach
// arr.forEach(value => console.log(value * value));

// Our forEach function
// forEach(arr, value => console.log(value * value));

function forEach(arr, func, context) {
  for(let i = 0; i < arr.length; i++) {
    func.call(context, arr[i], i, arr);
  }
}


class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
// [1, 2, 3].forEach(foo.showItem, foo);
// [4, 5, 6].forEach(foo.showItem);

forEach(["a", "b", "c"], item => console.log(item));
forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});

forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});