function newStack() {
  const stack = [];

  return {
    push(val) {
      stack.push(val);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(val => console.log(val));
    }
  }
}

let myStack = newStack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

myStack.printStack();

myStack.pop();
myStack.pop();
myStack.push(99);

myStack.printStack();


