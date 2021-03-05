//creating stack

class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    this.stack.pop();
  }
}

// Another way of implementing queues

function Queue() {
  let data = {};
  let head = 0;
  let tail = 0;

  this.enqueue = function (item) {
    data[tail] = item;
    tail++;
  };
  this.dequeue = function () {
    let item = data[head];
    delete data[head];
    head++;
    return item;
  }; 
  this.peek = function () {
    return data[head];
  };
}

function Stack() {
  this.size = 0;
  this.data = {};

  //create push method
  this.push = function (item) {
    this.data[this.size] = item;
    this.size++;
  };

  //pop
  this.pop = function () {
    let lastKey = this.size - 1;
    let result = this.data[lastKey];
    delete this.data[lastKey];
    this.size--;
    return result;
  };
}
 
