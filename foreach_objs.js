// version of foreach that operates on objects

let obj = {
  a: 1,
  b: 99,
  c: false,
  d: 'hello',
  e: undefined
};

function forEach(obj, func) {
  for(let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      func(prop, obj[prop]);
    }
  }
}

forEach(obj, (prop, val) => console.log(prop + '  ' + val));