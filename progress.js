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
  //dequeu 
  dequeu() {
    if (this.isEmpty()) return null
    const toBeRemoved = this.last
    if (this.last === this.first) {
      this.last= null       
    }
    this.last.next = this.last
    this.size--
    return toBeRemoved
  }
}

const queue = new Queue()
queue.enqueue('water')
queue.enqueue('tea')
queue.enqueue('vodka')