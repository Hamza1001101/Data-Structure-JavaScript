/**
 * * 2- Stack
 */

function createStack() {
  const arrayStack = [];

  /**
   * The order of our items is important here
   **/
  return {
    //Append new element to the array
    push(item) {
      arrayStack.push();
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
