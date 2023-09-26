class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    // Time Complexity = O(1)
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(value) {
    // Time Complexity = O(n)
    let node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }

    this.size++;
  }

  insert(value, index) {
    // Invalid Index
    if (index < 0 || index > this.size) {
      return;
    }

    // If Index Value is Zero
    if (index === 0) {
      this.prepend(value);
    } else {
      // If Index more than Zero
      let node = new Node(value);

      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    }
    this.size--;
    return removeNode.value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty!");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();

// console.log("List Is Empty? ", list.isEmpty());
// console.log("List Size ", list.getSize());
// list.print();
// list.append(10);
// // list.prepend(10);
// list.print();
// list.append(20);
// list.append(30);
// // list.prepend(20);
// // list.prepend(30);
// list.print();
// // list.prepend(40);
// list.append(40);

list.insert(10, 0);
list.print();

list.insert(20, 0);
list.print();

list.insert(30, 1);
list.print();

list.insert(40, 2);
list.print();
