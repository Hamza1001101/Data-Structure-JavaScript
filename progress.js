class Node {
    constructor(value) {
        this.value = value
        this.next= null 
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
    }
    const holderPointer = this.top;
    this.top = newNode;
    this.top.next = holderPointer;
    this.size++;
    }
    
    peek() {
        return this.top
    }
}

const ss = new Stack()
ss.push('mobile')
ss.push('sushi')
ss.push('phonenumber')

console.log(ss.peek())