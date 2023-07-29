export class Node {
  public next: Node | null = null;
  // prev: Node | null = null;
  constructor(public value: number) {}
}
export class LinkedList {
  head: Node | null = null;
  tail: Node | null = null;
  length: number;
  constructor(value: number) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value: number) {
    const newNode = new Node(value);
    const currentNode = this.tail;
    if (currentNode) {
      currentNode.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }
  prepend(value: number) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  traverseToIndex(index: number) {
    if (index === this.length || index >= this.length || index < 0) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      if (currentNode && currentNode.next) {
        currentNode = currentNode.next;
        counter++;
      }
    }
    return currentNode;
  }
  insert(index: number, value: number) {
    // let nextNode:Node|null
    if (index === 0 || index < 0) {
      this.prepend(value);
      return;
    } else if (index >= this.length) {
      this.append(value);
      return;
    } else {
      const newNode = new Node(value);
      const pervsNodes = this.traverseToIndex(index - 1);
      if (pervsNodes && pervsNodes.next) {
        const nextPointer = pervsNodes.next;
        pervsNodes.next = newNode;
        newNode.next = nextPointer;
        this.length++;
        return;
      }
    }
  }
  remove(index: number) {
    if (index >= this.length) throw new Error("index out of number");
    if (index === 0) {
      const pervsNodes = this.head?.next;
      if (pervsNodes) {
        this.head = pervsNodes;
      }
    } else if (this.length - 1 === index) {
      const pervsNodes = this.traverseToIndex(this.length - 2);
      if (pervsNodes && pervsNodes.next) {
        pervsNodes.next = null;
        const newLastNode = this.traverseToIndex(this.length - 2);
        this.tail = newLastNode;
      }
    } else {
      const pervsNodes = this.traverseToIndex(index - 1);
      if (pervsNodes && pervsNodes.next) {
        const removeNode = pervsNodes.next;
        pervsNodes.next = removeNode.next;
      }
    }
    this.length--;
  }
  reverse() {
    if (this.head && !this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first!.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head!.next = null;
    this.head = first;
    // return this.printList();
  }
}
