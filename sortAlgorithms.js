console.log("hello");

class Node {
  constructor(value) {
    this.node = value;
    this.next = null;
  }
}

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

qq.dequeue();;
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
    }
    const holderPointer = this.last;
    this.last = newNode;
    this.last.next = holderPointer;
    this.sizé++
  }
  peek() {
    return this.last;
  }
  pop() {
    if (this.isEmpty()) return null;
    const nodeTobeRemoved = this.last;
    if (this.last === this.first) {
      this.last = null;
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

st.pop()
st.pop()
st.pop()
st.pop()

console.log(st.peek());
