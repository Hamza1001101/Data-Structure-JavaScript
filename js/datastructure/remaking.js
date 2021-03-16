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
  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const currentPointer = this.top;
    this.top = this.top.next;
    this.size--;
    return this;
  }
  peek() {
    return this.top;
    }
    isEmpty() {
        return !this.top
    }
}

const myStack = new Stack();
myStack.push("REMAKING");
myStack.push("rEDOING");
myStack.push("WATER");
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.isEmpty());
