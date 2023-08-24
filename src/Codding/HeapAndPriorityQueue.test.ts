import { describe, it, expect, beforeEach } from "vitest";
import { Heaps } from "./HeapsAndPriorityQueue";
describe("component ", () => {
  let suit: Heaps;
  beforeEach(() => {
    suit = new Heaps();
  });
  it(" first test", () => {
    suit.insertMuch([75, 50, 25, 45, 35, 10, 15, 20, 40]);
    suit.extractValue();
    // suit.extractValue();
    console.log(suit.heaps);
  });
  it(" first test", () => {
    suit.insertMuch([10, 9, 9, 8, 8, 8, 8]);
    // suit.extractValue();
    // suit.extractValue();
    console.log(suit.heaps);
  });
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
});
/** Priority queue
 *
 */
class PriorityQueue {
  private heap: number[] = [];
  public comparator: (a: number, b: number) => boolean = (a, b) => a > b;
  constructor(comparator: (a: number, b: number) => boolean) {
    this.comparator = comparator;
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  _parent(idx: number) {
    return Math.floor((idx - 1) / 2);
  }
  _leftChild(idx: number) {
    return idx * 2 + 1;
  }

  _rightChild(idx: number) {
    return idx * 2 + 2;
  }

  _swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  _compare(i: number, j: number) {
    return this.comparator(this.heap[i], this.heap[j]);
  }

  push(value: number) {
    this.heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this.heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

// const pq = new PriorityQueue();
// pq.push(15);
// pq.push(12);
// pq.push(50);
// pq.push(7);
// pq.push(40);
// pq.push(22);

// while (!pq.isEmpty()) {
//   console.log(pq.pop());
// }
