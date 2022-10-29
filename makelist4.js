function makeList() {
  let list = [];

  return {
    list() {
      // print list
      if (!list.length) {
        console.log('The lsit is empty!');
      } else {
        list.forEach(item => console.log(item));
      }
    },

    remove(arg) {
      if (list.includes(arg)) {
        // remove from list
        list.splice(list.indexOf(arg), 1);
        console.log(`${arg} removed!`);
      } else {
        console.log(`${arg} not found in list!`);
      }
    },
    
    add(arg) {
      if (list.includes(arg)) {
        // already in list
        console.log(`${arg} is already in the list!`);
      } else {
        // add to list
        list.push(arg);
        console.log(`${arg} added!`);
      }
    }
  }
}



let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn

list.remove('dffd');