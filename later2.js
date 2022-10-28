// function later(func, arg) {
//   return function() {
//     func(arg);
//   };
// }

const later = (func, arg) => () => func(arg);

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!


const later2 = (func, arg1) => arg2 => func(arg1, arg2);

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

