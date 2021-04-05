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
  enqueue(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    return this.size++;
  }
  //dequeu
  dequeue() {
    if (this.isEmpty()) return null;
    const toBeRemoved = this.last;
    if (this.last === this.first) {
      this.last = null;
    }
    this.first = this.first.next;;;
    this.size--;;
    return toBeRemoved;
  }
  //peek
  peek() {
    return this.first;
  }
}

const queue = new Queue()
queue.enqueue('water')
queue.enqueue('tea')
queue.enqueue("Vodka");
const popped = queue.dequeue();
console.log(queue.peek());

console.log(`object`, popped) 