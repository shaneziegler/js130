// A stack is a compound data type like an array. The difference between an array and a stack is that in an array you can insert and remove elements in any order you want, but a stack has a rule whereby you can only add new elements at the end and remove the last inserted element.

// Create a function newStack, that, when called, returns a stack object with three methods: push, pop, and printStack. push takes a value and appends it to the stack. pop removes and returns the last element from the stack. printStack logs each remaining element of the stack on its own line, starting with the item that was last recently added to the stack and ending with the most recently added item.

// Internally, use an array to implement the stack. Make sure that the array is not accessible from outside the methods.

function newStack() {
  let stack = [];
  
  return {
    push(val) {
      stack.push(val);
    },

    pop() {
      return stack.pop();
    },
    printStack() {
      console.log('--- STACK ---');
      stack.forEach(val => console.log(val));
      console.log('------\n');
    }
  }
}

let s = newStack();

s.printStack();
s.push(5);
s.printStack();
s.push('shane');
s.printStack();
s.pop();
s.printStack();