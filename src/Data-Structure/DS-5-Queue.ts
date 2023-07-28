import { Node, DataValue } from "./DS-3-LinkList";
export class Queue {
  first: Node | null = null;
  last: Node | null = null;
  length: number = 0;
  constructor() {}
  peak() {
    return this.first;
  }
  equeque(value: DataValue) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const backPointer = this.last;
      this.last = newNode;
      backPointer.next = newNode;
      this.last.prev = backPointer;
    }
    this.length++;
  }
  dequeue() {
    if (this.first === this.last) {
      this.first = null;
    } else if (!this.last) {
      return null;
    }
    this.first = this.first.prev;
    this.length--;
  }
  get printValue() {
    const printValue = [];
    let NextNode = this.first;
    while (NextNode) {
      const { value, prev, next } = NextNode;
      printValue.push({
        value: value,
        prev: prev ? prev.value : null,
        next: next ? next.value : null,
      });
      NextNode = NextNode.next;
    }
    return printValue;
  }
}
