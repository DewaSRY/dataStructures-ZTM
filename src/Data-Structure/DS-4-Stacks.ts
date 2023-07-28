import { Node, DataValue } from "./DS-3-LinkList";
export class Stack {
  public head: Node | null = null;
  public tail: Node | null = null;
  public length: number = 0;
  constructor(value: DataValue) {
    this.push(value);
  }
  get peek() {
    return this.head;
  }
  push(value: DataValue) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      const holdingPointer = this.head;
      this.head = newNode;
      holdingPointer.next = newNode;
      this.head.prev = holdingPointer;
    }
    this.length++;
  }
  get pop(): void {
    if (!this.tail && !this.head) return null;
    if (this.tail === this.head) {
      this.head = null;
    } else if (!this.head) {
      return (this.tail = null);
    } else {
      const headFront = this.head;
      const headBack = headFront.prev;
      this.head = headFront.prev;
      headBack.next = null;
    }
    this.length--;
  }
  get printValue() {
    const printValue = [];
    let NextNode = this.tail;
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
