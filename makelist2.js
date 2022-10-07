// Modify the makeList function so that it returns an object that provides the interface shown above, including add, list, and remove methods.


function makeList() {
  let list = []

  return {
    add(item) {
      list.push(item);
      console.log(`${item} added!`)
    },

    list(){
      list.forEach(item => console.log(item));
    },

    remove(item) {
      let index = list.indexOf(item);
      if (index === -1) {
        console.log(`${item} not found!`);
      } else {
        list.splice(index, 1);
        console.log(`${item} removed!`)
      }
    }
  };
}


let list = makeList();
list.add("peas");
// peas added!

list.list();
// pe

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn