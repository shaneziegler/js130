function makeList() {
  let list = [];
  return function (arg) {
    if (arg === undefined) {
      // print list
      list.forEach(item => console.log(item));
      return;
    }

    if (list.includes(arg)) {
      // remove from list
      list.splice(list.indexOf(arg), 1);
      console.log(`${arg} removed!`);
    } else {
      // add to list
      list.push(arg);
      console.log(`${arg} added!`);
    }
  }
}



let list = makeList();
list();
// The list is empty.

list("make breakfast");
// make breakfast added!

list("read book");
// read book added!

list();
// make breakfast
// read book

list("make breakfast");
// make breakfast removed!

list();
// read book