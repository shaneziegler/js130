function strings5(first, ...strArr) {
  let last = strArr.pop();
  return {
    first,
    middle: strArr.sort(),
    last
  }
}

let arr = ['z', 's', 'z', 'a', 't'];
let { first, middle, last } = strings5(...arr);

console.log(first);
console.log(middle);
console.log(last);