(function countdown(num) {
  console.log(num);
  if (num > 0) {
    countdown(num - 1);
  }
})(7)


// countdown(7)
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0