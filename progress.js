class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.last = null;
    this.first = null;
    this.size = 0;
  }
  enqueue(item) {
    const newNode = new Node(item);
    if (!this.size) {
      this.last = newNode;
      this.first = newNode;
    } else if (this.size >= 1) {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (!this.size) return null;
    if (this.last === this.first) {
      this.last = null;
    }
      this.first = this.first.next;
    this.size--;
    return this;
  }
  peek() {
    return this.first
  }
}

const queue = new Queue();
queue.enqueue("Tea");
queue.enqueue("Soda");
queue.enqueue("Coffee");

queue.dequeue();
queue.dequeue()
queue.dequeue();

console.log(queue.peek());


class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }
  push(item) {
    const newNode = new Node(item);
    if (!this.size) {
      this.bottom = newNode;
      this.top = newNode;
    } else if (this.size >= 1) {
      const holder = this.top;
      this.top = newNode;
      this.top.next = holder;
    }
    this.size++;
    return this;
  }
  pop() {
    if (!this.size) return undefined;

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.size--;
    return this;
  }
  peek() {
    return this.top;
  }
  isEmpty() {
    return !this.size;
  }
}

const stack = new Stack();
stack.push("Frukost");
stack.push("pancake");
stack.push("Lunch");

stack.pop();
stack.pop();
stack.pop();

console.log(stack.peek());
