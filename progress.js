console.log("hello world");

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
   const newNode = new Node(item)
 }
  pop() {
    if (this.isEmpty()) return null;
    if (this.length === 1) {
      const nodeTobeRemoved = this.head;
      this.tail = null;
      this.head = null;
      this.length--;
      return nodeTobeRemoved;
    } else {
      let current = this.head;
      let nodeTobeRemoved = this.tail;
      let secondToRemove;

      while (current) {
        if ((current.next = this.tail)) {
          secondToRemove = current.next;
          break;
        }
        current = current.next;
      }
      secondToRemove.next = null;
      this.tail = secondToRemove;
      this.length--;
      return nodeTobeRemoved;
    }
  }
  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    let currentNode = this.head;
    let iterator = 0;
    while (iterator < index) {
      iterator++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}
const ll = new LinkedList();
ll.push("english");
ll.push("svenskan");
ll.push("portugal");
ll.push("somali");

ll.pop();
console.log(ll.get(1));

class Queue {
  constructor() {
    this.last = null;
    this.first = null;
    this.size = 0;
  }
  isEmpty() {
    return !this.size;
  }
  //enqueue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.last = newNode;
      this.first = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.size++;
  }
  //dequeue
  dequeue() {
    if (this.isEmpty()) return null;
    const nodeTobeRemoved = this.first;
    if (this.last === this.first) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return nodeTobeRemoved;
  }
  peek() {
    return this.first;
  }
}

const qq = new Queue();
qq.enqueue("water");
qq.enqueue("tea");
qq.enqueue("coffe");

qq.dequeue();
console.log(qq.peek());

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.sizé = 0;
  }

  isEmpty() {
    return !this.sizé;
  }
  push(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const holderPointer = this.last;
      this.last = newNode;
      this.last.next = holderPointer;
    }
    this.sizé++;
  }
  peek() {
    return this.last;
  }
  pop() {
    if (this.isEmpty()) return null;
    const nodeTobeRemoved = this.last;
    if (this.last === this.first) {
      this.first = null;
    }
    this.last = this.last.next;
    this.sizé--;
    return nodeTobeRemoved;
  }
}

const st = new Stack();
st.push("mobile");
st.push("computer");
st.push("desktop");
st.push("screen");

st.pop();

st.pop();
st.pop();
st.pop();

console.log(st.peek());
