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
  isEmpty() {
    return !this.size;
  }
  push(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      const holderPointer = this.top;
      this.top = newNode;
      this.top.next = holderPointer;
    }
    this.size++;
  }
  pop() {
    if (this.isEmpty()) return null;
    const nodeToRemove = this.top;
    if (this.bottom === this.top) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.size--;
    return nodeToRemove;
  }
  peek() {
    return this.top;
  }
}

const ss = new Stack();
ss.push("mobile");
ss.push("sushi");
ss.push("phonenumber");

const last = ss.pop();

console.log(ss.peek());
//console.log(`object`, last);
