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

console.log(myStack.peek());

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //enqueue
  enqueue(item) {
    const newNode = new Node(item);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else if (this.size >= 1) {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  //dequeue
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return this;
  }
  peek() {
    return this.first;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Geography");
myQueue.enqueue("Science");
myQueue.enqueue("Math");
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  isEmpty() {
    return !this.length;
  }
  peek() {
    return this.tail;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    /* List is empty */
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      /* There is one node in the list */
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else {
      /* There are multiple nodes in the list */
      // Start our pointer at the head
      let currentNode = this.head;
      // We're removing the last node in the list
      const nodeToRemove = this.tail;
      // This will be our new tail
      let secondToLastNode;
      while (currentNode) {
        if (currentNode.next === this.tail) {
          secondToLastNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;
      return nodeToRemove;
    }
  }
  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) {
      return this.head;
    }
    if (index === this.length - 1) {
      return this.tail;
    }
    let current = this.head;
    let iterator = 0;
    while (iterator < index) {
      iterator++;
      current = current.next;
    }
    return current;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.push("water");
myLinkedList.push("data structure");
myLinkedList.push("Science");
myLinkedList.push("Somali");
//myLinkedList.pop();
myLinkedList.get(2);
console.log(myLinkedList.get(3));

const se = [92, 3, 2, "4"];