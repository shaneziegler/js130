let arr = new Array(5);

arr[0] = 'start';
arr[arr.length - 1] = 'end';
console.log(`Array length = ${arr.length}`);

arr.forEach((elm, idx) => console.log(`Index: ${idx} = ${elm}`));

