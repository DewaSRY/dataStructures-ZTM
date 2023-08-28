/**Heaps
 * Heaps is data structure look like tree with
 * additional rule
 *  heep use to structure data base on the one specific role
 * it might be base in the smaller value or greater,
 *
 * in simple understanding heap only have two common function
 * it's insert where the value get compare and structure by role
 * and extract the first value then re structure the node
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
export class Heaps {
  public heaps: number[] = [];
  constructor(public comparator = (a: number, b: number) => a > b) {}
  insert(value: number) {
    this.heaps.push(value);
    this.BubbleUp();
    return this;
  }
  private BubbleUp() {
    let LastNodeIndx = this.heaps.length - 1;
    while (true) {
      let parentIndex = Math.floor((LastNodeIndx - 1) / 2);
      if (parentIndex < 0) return this;
      if (this.compare(parentIndex, LastNodeIndx)) break;
      this.swapNode(parentIndex, LastNodeIndx);
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
  /**Removing
   * - Swap the first value in the values property with the last one
   * - pop from the value property so you can return the value ar the end have the new root "sink down" to the correct spot
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
      this.compare(leftChildIdx, rightChildIdx)
        ? (swap = leftChildIdx)
        : (swap = rightChildIdx);
      if (!swap) return this;
      this.swapNode(parentIndex, swap);
      parentIndex = swap;
    }
  }
  private compare(indexOne: number, indexTwo: number) {
    return this.comparator(this.heaps[indexOne], this.heaps[indexTwo]);
  }
  swapNode(parenIndx: number, childeIndx: number) {
    let temp = this.heaps[parenIndx];
    this.heaps[parenIndx] = this.heaps[childeIndx];
    this.heaps[childeIndx] = temp;
    return this;
  }
}
/** PriorityQueue
 *  by andrew
 */
export class HeapSecond {
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
/**Priority queue
 * a data structure where each element has priority. Elements
 * with has a priority element with higher priorities are served
 * before elements with lower priorities
 *
 */
class Nodes {
  constructor(public val: string, public priority: number) {}
}
/** PriorityQueue for hospitals
 * which mean the smaller number is the priority
 */
export class PriorityQueue {
  public values: Nodes[] = [];
  constructor(public comparator = (a: number, b: number) => a < b) {}
  enqueue(val: string, priority: number) {
    let newNode = new Nodes(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (parentIdx < 0) return this;
      if (this.compare(parentIdx, idx)) break;
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }
    return this;
  }
  /**compare
   * expect the first indx is truthy
   * and the second flashy
   */
  private compare(indexOne: number, indexTwo: number) {
    return this.comparator(
      this.values[indexOne].priority,
      this.values[indexTwo].priority
    );
  }
  private swap(indexOne: number, indexTwo: number) {
    let temp = this.values[indexOne];
    this.values[indexOne] = this.values[indexTwo];
    this.values[indexTwo] = temp;
  }
  /** return the mine priority
   *
   */
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end!;
      this.sinkDown();
    }
    return min;
  }
  private sinkDown() {
    let idx = 0;
    const length = this.values.length;
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      if (leftChildIdx >= length || rightChildIdx >= length) return this;
      let swap: number | null = null;
      this.compare(leftChildIdx, rightChildIdx)
        ? (swap = leftChildIdx)
        : (swap = rightChildIdx);
      if (swap === null) break;
      this.swap(idx, swap);
      idx = swap;
    }
    return this;
  }
}

export class MaxBinaryHeap {
  public values: number[] = [];

  compare(indxOne: number, indxTwo: number) {
    return this.values[indxOne] > this.values[indxTwo];
  }
  swap(indxOne: number, indxTwo: number) {
    let temp = this.values[indxOne];

    this.values[indxOne] = this.values[indxTwo];
    this.values[indxTwo] = temp;
  }
  insert(val: number) {
    this.values.push(val);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let nodeIndex = this.values.length - 1;
    while (true) {
      let parentIndx = Math.floor((nodeIndex - 1) / 2);
      if (parentIndx < 0) break;
      if (this.compare(parentIndx, nodeIndex)) break;
      this.swap(parentIndx, nodeIndex);
      nodeIndex = parentIndx;
    }
  }
  extractMax() {
    let maxNum = this.values[0];
    let end = this.values.pop()!;
    if (this.values.length > 0) {
      this.values[0] = end;
    }
    this.bubbleDown();

    return maxNum;
  }
  bubbleDown() {
    let parentIndx = 0;
    let length = this.values.length - 1;
    while (true) {
      let leftChild = parentIndx * 2 + 1;
      let rightChild = parentIndx * 2 + 2;
      if (leftChild > length || rightChild > length) return this;
      let swap;
      this.compare(leftChild, rightChild)
        ? (swap = leftChild)
        : (swap = rightChild);
      console.log(swap);
      if (!swap) return this;
      this.swap(parentIndx, swap);
      parentIndx = swap;
    }
  }
}
