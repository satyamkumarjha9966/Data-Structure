const LinkedList = require("./3.0.LinkedList_Stack_Queue_Model");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  onqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty());
queue.onqueue(10);
queue.onqueue(20);
queue.onqueue(20);
queue.onqueue(40);
queue.print();
console.log(queue.getSize());

console.log(queue.dequeue());
queue.print();

console.log(queue.peek());
