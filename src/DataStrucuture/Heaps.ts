/**Heaps
 * Heaps is data structure look like tree with
 * additional rule
 */
/**Binary Heap
 *   Binary Heap very similar to binary search tree, but
 * withe some different rules. In a maxBinaryHeap, parent
 * nodes are always larger then child. in a MinBinaryHeap,
 * parent nodes are always smaller then child nodes.
 *   which the big different Binary Heap and Binary tree is
 * Binary heep does't have rule (left < parent < right ) node
 * order
 */
/** Max Binary Heap
 * - Each parent has at most two child nodes
 * - The values of each parent nodes is always greater then its child nodes
 * - In MaxBinary Heap the parent is greater then the childe,
 *   but there are no guarantees between sibling nodes
 * - A binary heap is as compact as posable. All the children
 *   of each node are as full as they can and left children
 *   are filed out first
 */
/**Store the heep
 * -> we can implement heap on the array by use simple
 *    mathematic to access it
 * ->the math form is
 * => For any paren (N)
 *   - left Child is 2(N) + 1
 *   - right Child is 2(N) + 2
 * =>and to access the parent of child is
 *   - every child parent index is (N-1)/2
 */

export class MaxBinaryHeep {
  public value: number[] = [];
  insert(value: number) {
    this.value.push(value);
    this.BubbleUp();
  }
  BubbleUp() {
    let index = this.value.length - 1;
    let element = this.value[index];
    while (true) {
      let parentIndex = Math.floor((index - 1) / 2) as number;
      let parent = this.value[parentIndex];
      if (element < parent) break;
      this.value[parentIndex] = element;
      this.value[index] = parent;
      index = parentIndex;
      return;
    }
  }
  insertMuch(arr: number[]) {
    let queue = arr;
    while (queue.length) {
      let val = queue.shift();
      if (!val) return;
      this.insert(val);
    }
    return this;
  }
  /**Removing
   * - Swap the first value in the values property with the last one
   * - pop from the valus property so you can return the valus ar the end have the new root "sink down" to the correct spot
   * => Have parent index start at 0 (the root)
   * =>find the index of the left child : 2* index + 1
   * (make sure not out of bonds)
   * =>find the index of the right child : 2* index + 2
   * (make sure not out of bonds)
   * =>if the left or right child is greater then element .. swap.
   * =>if both left and right child are larger swap with larger
   * child
   * keep looping ans swapping until neither is larger then
   * the element
   * =>return the old root
   */
  extractMax() {
    const max = this.value[0];
    const end = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = end!;
      this.sinkDown();
    }
    return max;
  }
  private sinkDown() {
    let idx = 0;
    const length = this.value.length;
    const element = this.value[0];
    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.value[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.value[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild!)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.value[idx] = this.value[swap];
      this.value[swap] = element;
      idx = swap;
    }
  }
}
/** Heaps
 * by me
 */
export class Heaps {
  public heaps: number[] = [];
  insert(value: number) {
    this.heaps.push(value);
    this.BubbleUp();
    return this;
  }
  private BubbleUp() {
    let LastNodeIndx = this.heaps.length - 1;
    let LastNode = this.heaps[LastNodeIndx];
    while (true) {
      let parentIndex = Math.floor((LastNodeIndx - 1) / 2);
      if (parentIndex < 0) return this;
      let parent = this.heaps[parentIndex];
      if (LastNode < parent) break;
      this.heaps[parentIndex] = LastNode;
      this.heaps[LastNodeIndx] = parent;
      LastNodeIndx = parentIndex;
    }
    return this;
  }

  insertMuch(arr: number[]) {
    let queue = arr;
    while (queue.length) {
      let val = queue.shift();
      if (!val) return;
      this.insert(val);
    }
    return this;
  }
  /** Remove value, heap only remove the greater value from the
   * structure which mean the mine root ar the first value from the
   * array, then tho re structure the heap by ut the last value to
   * the top then compare the top value with the child
   */
  extractValue() {
    if (!this.heaps.length) return;
    let max = this.heaps.shift();
    let lastNode = this.heaps.pop()!;
    this.heaps.unshift(lastNode);
    this.bubbleDown();
    return max;
  }
  private bubbleDown() {
    let length = this.heaps.length;
    let parentIndex = 0;
    while (true) {
      let leftChildIdx = parentIndex * 2 + 1;
      let rightChildIdx = parentIndex * 2 + 2;
      if (leftChildIdx >= length || rightChildIdx >= length) return this;
      let swap: number | null = null;
      this.heaps[leftChildIdx] > this.heaps[rightChildIdx]
        ? (swap = leftChildIdx)
        : (swap = rightChildIdx);
      if (this.swapNode(parentIndex, swap)) console.log(swap);
      if (!swap) return this;
      parentIndex = swap;
    }
  }
  swapNode(parenIndx: number, childeIndx: number) {
    let parenNode = this.heaps[parenIndx];
    let childeNode = this.heaps[childeIndx];
    if (parenNode > childeNode && childeNode && parenNode) return this;
    this.heaps[parenIndx] = childeNode;
    this.heaps[childeIndx] = parenNode;
    return this;
  }
}
/** PriorityQueue
 *  by andrew
 */
export class PriorityQueue {
  heap: number[] = [];
  constructor(
    public comparator: (a: number, b: number) => boolean = (a, b) => a > b
  ) {}
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
  insertMuch(arr: number[]) {
    let queue = arr;
    while (queue.length) {
      let val = queue.shift();
      if (!val) return;
      this.push(val);
    }
    return this;
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
