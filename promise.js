let doInitialWork = function(resolve, reject) {
  let x = 2 + 2;

  if (x === 4) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
}

let workFinishedSuccess = function(result) {
  console.log(result); // "Stuff worked!"
  return result;
}

let workFinishedFail = function(err) {
  console.log(err); // Error: "It broke"
  console.log('******');
}

let promise = new Promise(doInitialWork);

promise.then(workFinishedSuccess, workFinishedFail).then(workFinishedSuccess, workFinishedFail);
// let z = promise.then(workFinishedSuccess, workFinishedFail);

console.log('done');
// console.log(z);

