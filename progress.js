class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }
  isEmpty() {
    return !this.length;
  }
  push(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.tail = newNode;
      this.head = newNode;
    } else if (this.length >= 1) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (this.isEmpty()) return null;
    if (this.length === 1) {
      const toRemove = this.head;
      this.tail = null;
      this.head = null;
      this.length--;
      return toRemove;
    } else {
      const nodeToRemove = this.tail;
      let current = this.head;
      let secondToLast;
      while (current) {
        if (current.next === this.tail) {
          secondToLast = current;
          break;
        }
        current = current.next;
      }
      secondToLast.next = null;
      this.tail = secondToLast;
      this.length--;
      return nodeToRemove;
    }
  }

  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null 
    }
    if (index == 0) {
      return this.head
    }
    if (index === this.length - 1) {
      return this.tail
    }
    else {
      let currentNode = this.head
      let iterator = 0
      while (iterator < index) {
        iterator++
        currentNode= currentNode.next
      }
      return currentNode
    }
  }
}

const ll = new LinkedList();
ll.push("Lunch");
ll.push("brakfastr");
ll.push("dinner");
ll.push("protien");
console.log(ll.get(2));
