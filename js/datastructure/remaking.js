console.log("helooooooooooooooo from remaking");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(item) {
    const newNode = new Node(item);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else if (this.size >= 1) {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.size++;
    return this;
  }
  peek() {
    return this.top;
  }
}

const myStack = new Stack();
myStack.push("REMAKING");
myStack.push("rEDOING");
myStack.push("WATER");
console.log(myStack.peek());
