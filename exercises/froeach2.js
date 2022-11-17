let arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(elm => {
  console.log(elm);
  arr.pop();
});