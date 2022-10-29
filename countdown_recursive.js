(function countdown(start) {
  console.log(start);
  if (start > 0) {
    countdown(start - 1);
  }
})(7);