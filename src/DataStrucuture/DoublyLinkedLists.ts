/** Doubly Linked Lists  lists
 * -> A data structure that contains a head, tail and length
 *   property
 * -> Linked lists consist of nodes, and each node has a value
 *   and a pointer to another node or null, doubly liked list have
 *   next and previous pointer and make it easier to search
 */

class Node {
  public next: Node | null = null;
  public prev: Node | null = null;
  constructor(public value: number) {}
}

export class DoublyLinkedList {
  public head: Node | null = null;
  public tail: Node | null = null;
  public length: number = 0;

  push(val: number) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return;
    let frontPointer = this.head;
    this.head = this.head.next;
    this.head!.prev = null;
    this.length--;
    return frontPointer;
  }
  unshift(val: number) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.head.prev = node;
      let frontPointer = this.head;
      this.head = node;
      this.head.next = frontPointer;
    }
    this.length++;
    return this;
  }
  get(index: number) {
    if (!this.length) return;
    let currentNode = this.head;
    while (index) {
      currentNode = currentNode?.next!;
      index--;
    }
    return currentNode;
  }
  set(index: number, value: number) {
    if (index > this.length) return false;
    let node = this.get(index);
    node!.value = value;
    return true;
  }
  remove(index: number) {
    if (index === 0) {
      return this.shift();
    } else {
      let backPointer = this.get(index - 1)!;
      let removeNode = backPointer.next!;
      backPointer.next = removeNode.next;
      backPointer.next!.prev = backPointer;
      this.length--;
      return removeNode;
    }
  }
  pop() {
    if (!this.head) return;
    if (this.length === 1) {
      let removeNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removeNode;
    } else {
      let removeNode = this.tail;
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      this.length--;
      return removeNode;
    }
  }
  insert(index: number, val: number) {
    if (index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    } else {
      let newNode = new Node(val);
      let backPointer = this.get(index - 1)!;
      let frontPointer = backPointer.next!;
      backPointer.next = newNode;
      newNode.next = frontPointer;
      newNode.prev = backPointer;
      this.length++;
      return true;
    }
  }
  // reverse() {
  //   if (this.length === 1) {
  //     return this;
  //   } else {
  //     let currentNode = this.head;
  //     let reverse = this.head;
  //     reverse!.next = null;
  //     this.tail = reverse;
  //     while (currentNode) {
  //       let nextNode = currentNode?.next!;
  //       currentNode.prev = currentNode.next;
  //       currentNode!.next = reverse;
  //       reverse = currentNode;
  //       currentNode = nextNode;
  //     }
  //     return reverse;
  //   }
  // }

  reverse() {
    if (this.length === 0) return undefined;
    if (this.length === 1) return this;
    else {
      let current = this.head;
      this.head = this.tail;
      this.tail = current;

      let prev = null;

      while (current) {
        let next = current.next;
        current.next = prev;
        current.prev = next;
        prev = current;
        current = next;
      }
      return this;
    }
  }
  traverse(node = this.head, list: number[] = []): number[] {
    if (!node) return list;
    list.push(node.value);
    return this.traverse(node.next, list);
  }
}
