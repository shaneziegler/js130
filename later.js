// Write a function named later that takes two arguments: a function and an argument for that function.
//  The return value should be a new function that calls the input function with the provided argument, like this:

function later(func, msg) {
  return function() {
    func(msg);
  }
}


const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!


// Write a function named later2 that takes two arguments: a function and an argument for that function.
// The return value should be a new function that also takes an argument.
// The new function should call the input function with the argument provided to later2 and the argument provided to the returned function. For example:

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

function later2(func, arg) {
  return arg2 => func(arg, arg2);
}