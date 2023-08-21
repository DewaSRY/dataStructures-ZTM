class Node {
  next: Node | null = null;
  prev: Node | null = null;
  constructor(public value: number) {}
}
export class Queue {
  first: Node | null = null;
  last: Node | null = null;
  length: number = 0;
  constructor(value: number) {
    // this.first = new Node(value);
    // this.last = this.first;
    this.enqueue(value);
  }
  peek = () => {
    console.log(this.first);
    const { value, prev, next } = this.first!;
    return {
      value: value ? value : null,
      prev: prev ? prev.value : null,
      next: next ? next.value : null,
    };
  };
  enqueue(value: number) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      const backQueue = this.last;
      this.last = newNode;
      backQueue!.next = newNode;
      this.last.prev = backQueue;
    }
    this.length++;
  }
  dequeue() {
    if (this.first === this.last) {
      this.first = null;
    } else if (!this.last) {
      return null;
    } else {
      this.first = this.first!.next;
      this.length--;
    }
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
