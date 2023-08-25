/**Priority queue
 * a data structure where each element has priority. Elements
 * with has a priority element with higher priorities are served
 * before elements with lower priorities
 *
 */
class Nodes {
  constructor(public val: string, public priority: number) {}
}
class PriorityQueue {
  public values: Nodes[] = [];
  enqueue(val: string, priority: number) {
    let newNode = new Nodes(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end!;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild!.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

export class PriorityQueueSecond {
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
