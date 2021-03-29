console.log("hello");

class Node{
  constructor(value) {
    this.node = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.tail = null
    this.head = null
    this.length=0
  }
  isEmpty() {
    return !this.length
  }
  push(item) {
    const newNode = new Node(item)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
      this.length++
    }
    else {
      this.tail.next = newNode
      this.tail = newNode
      this.length++
    }
    return newNode
  }
  pop() {
    if (this.isEmpty()) return null
    else if (this.length === 1) {
      const nodeToRemove = this.head
      this.head = null
      this.tail = null
      this.length--
      return nodeToRemove
    }
    else {
      const nodeToRemove = this.tail
      let current = this.head
      let secondToRemove
      while (current) {
        if (current.next === this.tail) {
          secondToRemove = current
          break
        }
        current = current.next
      }
      secondToRemove.next = null
      this.tail = secondToRemove
      this.length--
      return nodeToRemove
    }
  }
  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null 
    }
    if (index === 0) return this.head
    if (index === this.length - 1) return this.tail
    else {
      let current = this.head
      let iterator =0
      while (iterator < index) {
        iterator++
        current = current.next
      }
      return current
    }
  }
}


const ll = new LinkedList()
ll.push('tea')
ll.push('coffee')
ll.push('water')
ll.push("MOBILE");
ll.push("computer");
//const lastItem = ll.pop()

console.log(ll.get(3))

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size=0
  }
  isEmpty() {
    return !this.size
  }
  enqueue(item) {
    let newNode = new Node(item)
    if (this.isEmpty()) {
      this.first = newNode
      this.last = newNode
    }
    else {
      this.last.next = newNode
      this.last = newNode
    }
    return this.size++
 
  }
  dequeue() {
    if (!this.size) return null
    if (this.first === this.last) {
      this.last= null 
    }
    this.first = this.first.next
    this.size--
  }
  peek() {
    return this.first
  }
}

const qq = new Queue()
qq.enqueue('dollar')
qq.enqueue('Euro')
qq.enqueue('somali shilling')
qq.dequeue()
qq.dequeue()
qq.dequeue();
console.log(qq.peek())