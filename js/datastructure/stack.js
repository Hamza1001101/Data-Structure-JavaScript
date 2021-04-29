/**
 * * 2- Stack
 * * Stack is a collection of items that follows the principle
 * * of "Last in, first out". (LIFO)
 */



function createStack() {
  const arrayStack = [];

  /**
   * The order of our items is important here 
   **/
  return {
    //Append new element to the array
    push(item) {
      arrayStack.push(item);
    },
    //remove the last element
    pop() {
      return arrayStack.pop();
    },
    //next element to be removed
    peek() {
      return arrayStack[arrayStack.length - 1];
    },
    get length() {
      return arrayStack.length;
    },
    isEmpty() {
      return arrayStack.length == 0;
    },
  };
}

const gettingReady = createStack();

gettingReady.push("eat breakfast");
gettingReady.push("brush teeth");
gettingReady.push("take a shower");

gettingReady.pop();
gettingReady.pop();

console.log(gettingReady.peek());