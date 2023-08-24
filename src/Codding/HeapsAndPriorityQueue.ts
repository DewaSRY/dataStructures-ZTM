/** Heaps look like binary search tree but te role is the mine
 * root should teh greater number and every lift should have
 * child no matter the order is as long the childe is smaller
 * then the parents for the max heep and the opposed for the
 * min heaps
 */
/** The relation of every node on the heep is
 *  -> Parent flor (idx - 1) / 2
 *  -> left (idx * 2) + 1
 *  -> right (idx * 2) + 2
 */

export class Heaps {
  public heaps: number[] = [];

  insert(value: number) {
    this.heaps.push(value);
    this.bubbleUp();
    return this;
  }
  private bubbleUp() {
    let LastNodeIndx = this.heaps.length - 1;
    let LastNode = this.heaps[LastNodeIndx];
    while (true) {
      let parentIndex = Math.floor((LastNodeIndx - 1) / 2);
      if (parentIndex < 0) return;
      let parent = this.heaps[parentIndex];
      if (LastNode < parent) break;
      this.heaps[parentIndex] = LastNode;
      this.heaps[LastNodeIndx] = parent;
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
    // let { swapNode } = this;
    let parentIndex = 0;
    while (true) {
      let leftChildIdx = parentIndex * 2 + 1;
      let rightChildIdx = parentIndex * 2 + 2;
      if (leftChildIdx >= length || rightChildIdx >= length) return;
      let swap: number | null = null;
      if (this.swapNode(parentIndex, rightChildIdx)) swap = rightChildIdx;
      if (this.swapNode(parentIndex, leftChildIdx)) swap = leftChildIdx;
      if (!swap) return;
      parentIndex = swap;
    }
  }
  swapNode(parenIndx: number, childeIndx: number) {
    let parenNode = this.heaps[parenIndx];
    let childeNode = this.heaps[childeIndx];
    if (parenNode > childeNode && childeNode && parenNode) return;
    this.heaps[parenIndx] = childeNode;
    this.heaps[childeIndx] = parenNode;
    return childeIndx;
  }
}
