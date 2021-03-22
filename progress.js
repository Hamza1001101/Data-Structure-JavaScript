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
    if (this.isEmpty()) {
      return null;
    }
    if (this.length === 1) {
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else {
      const nodeToRemove = this.tail;
      let current = this.head;
      let secondToLast;
      while (current) {
        if (current.next === this.tail) {
          secondToLast = current
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
    if (index === 1) return this.head
    if (index === this.length - 1) return this.tail
    
    else {
      let iterator = 0
      let current = this.head
      while (iterator < index) {
        iterator++
        current = current.next
      }
      return current
    }
  }
}

const ll = new LinkedList();
ll.push("Lunch");
ll.push("brakfastr");
ll.push("dinner");
ll.push("protien");
console.log(ll.get(2));


/**
 * * Bubble sort
 */

const bubbleSort = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

      if (arr[j] < arr[j+1]) {
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
    return arr
  }
}

console.log(bubbleSort([4,5,3,42,2]))