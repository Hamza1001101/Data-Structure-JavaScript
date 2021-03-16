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
myStack.isEmpty();

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(item) {
    const newNode = new Node(item);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else if (this.size >= 1) {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.size++;
    return this;
  }
  peek() {
    return this.first;
  }
}
const myQueue = new Queue();
myQueue.enqueue("Hörlurar");
myQueue.enqueue("Charger");
myQueue.enqueue("Firee");


console.log(myQueue.peek());