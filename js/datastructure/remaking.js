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
  //push
  push(item) {
    const newNode = new Node(item);
    if (!this.top) {
      this.bottom = newNode;
      this.top = newNode;
    } else if (this.size >= 1) {
      const pointerHolder = this.top;
      this.top = newNode;
      this.top.next = pointerHolder;
    }
    this.size++;
    return this;
  }
  //pop
  pop() {
    if (!this.top) return null;
    if (this.bottom === this.top) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.size--;
    return this;
  }
  //peek
  peek() {
    return this.top;
  }
}

const myStack = new Stack();
myStack.push("Mobile");
myStack.push("Books");
myStack.push("Computer");
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek());
