/** Queue
 * queue is data structure where first data in first data out
 *
 */
class Node {
  next: Node | null = null;
  prev: Node | null = null;
  constructor(public value: number) {}
}
export class Queue {
  first: Node | null = null;
  last: Node | null = null;
  length: number = 0;
  constructor(value: number | null = null) {
    this.enqueue(value);
  }
  /**peek
   * use tto see which data is on the head
   */
  peek = () => {
    let val = this.first!;
    if (!val) return null;
    return val.value;
  };
  /** enqueue
   * use to insert data in
   */
  enqueue(value: number | null) {
    if (!value) return this;
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
    return this;
  }
  /** dequeue
   * use to pop data out
   */
  dequeue() {
    if (this.first === this.last) {
      let val = this.first;
      this.first = null;
      return val?.value;
    } else if (!this.last) {
      return null;
    } else {
      let val = this.first;
      this.first = this.first!.next;
      this.length--;
      return val?.value;
    }
  }
  get printValue() {
    const printValue = [];
    let NextNode = this.first;
    while (NextNode) {
      printValue.push(NextNode.value);
      NextNode = NextNode.next;
    }
    return printValue;
  }
}
