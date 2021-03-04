/**
 * * DataStructure adn Algorithms. In JS.
 */

/**
 * * 1- Queue
 * * Queue's are FIFO (First in First out) structure.
 */

/* Create factory method. 
  his function returns our queue as a plain js object */

function createQueue() {
  const queue = [];
  return {
    // add or enqueue
    enqueue(item) {
      queue.unshift(item);
    },
    // remove or dequeue
    dequeue() {
      //if(queue.length === 0) return -1
      return queue.pop();
    },
    // peek (check next Item that would be removed)

    peek() {
      return queue[queue.length - 1];
    },
    // length
    get length() {
      return queue.length;
    },
    // isEmpty
    isEmpty() {
      return queue.length === 0;
    },
  };
}

const q = createQueue();
console.log(q.isEmpty());

q.enqueue("Make an egghead lesson");
q.enqueue("Help others to Learn");
q.enqueue("Be happy");

q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.peek());

/**
 * * 2- Priority Queue
 * * A special type of queue in which each element is associated with a
 * * priority and is served according to its priority.
 */

function ceratePriorityQueue() {
  // two queue
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();
  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }

      return lowPriorityQueue.dequeue();
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }

      return lowPriorityQueue.peek();
    },
    length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    },
  };
}
const qq = ceratePriorityQueue();
qq.enqueue("A fix here");
qq.enqueue(" A bug there");
qq.enqueue("A new feuture");

qq.dequeue();

qq.enqueue("Emergency tast!", true);
console.log(qq.peek());
