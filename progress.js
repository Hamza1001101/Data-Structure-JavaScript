class Node {
  constructor(value) {
    this.value = value
    this.next = null 
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //isEmpty
  isEmpty() {
    return !this.size;
  }
  //enqueu
  enqueu(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.size++;
  }
}