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
  constructor(parent: number) {
    this.value.push(parent);
  }
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
  sinkDown() {
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
