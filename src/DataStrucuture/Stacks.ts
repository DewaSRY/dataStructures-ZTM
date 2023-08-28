/**Stack
 * A LIFO data structure, the last element added to stack
 * will be first remove from the stack
 * HOW is it Used ?
 * think about a stack of plates, or stack of markers, or
 * stack of.. anything. as you pile it up the lasts thing
 * (or the topmost thing) is gets remove first
 */
class Node {
  next: Node | null = null;
  prev: Node | null = null;
  constructor(public value: number) {}
}
export class Stack {
  public head: Node | null = null;
  public tail: Node | null = null;
  public length: number = 0;
  constructor(value: number) {
    this.push(value);
  }
  peek() {
    const { value, prev, next } = this.head!;
    return {
      value: value ? value : null,
      prev: prev ? prev.value : null,
      next: next ? next.value : null,
    };
  }
  push(value: number) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      const holdingPointer = this.head;
      this.head = newNode;
      holdingPointer!.next = newNode;
      this.head.prev = holdingPointer;
    }
    this.length++;
  }
  pop() {
    if (!this.tail && !this.head) return null;
    if (this.tail === this.head) {
      this.head = null;
    } else if (!this.head) {
      return (this.tail = null);
    } else {
      const CurrentHead = this.head;
      const previousHead = CurrentHead.prev;
      this.head = CurrentHead.prev;
      previousHead!.next = null;
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
class Nodess {
  public next: Nodess | null = null;
  constructor(public value: number) {}
}

export class StackSec {
  public first: Nodess | null = null;
  public last: Nodess | null = null;
  public size: number = 0;

  push(val: number) {
    let newNode = new Nodess(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;

      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    let temp = this.first;
    this.first = this.first?.next!;
    this.size--;
    return temp?.value;
  }
}
