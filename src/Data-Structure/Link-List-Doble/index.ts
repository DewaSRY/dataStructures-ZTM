class Node {
  next: Node | null = null;
  prev: Node | null = null;
  constructor(public value: number) {}
}

export class LinkedListDoable {
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
    const lastNode = this.tail;
    newNode.prev = lastNode;
    const currentNode = this.tail;
    if (currentNode) {
      //   console.log(currentNode);
      currentNode.next = newNode;
    }
    // newNode.prev = this.tail;
    this.tail = newNode;
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
  prepend(value: number) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head!.prev = newNode;
    this.head = newNode;
    this.length++;
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
        newNode.prev = pervsNodes;
        newNode.next = nextPointer;
        pervsNodes.prev = newNode;
        this.length++;
        return;
      }
    }
  }
}
