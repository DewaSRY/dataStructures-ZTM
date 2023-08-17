/** Singly linked lists
 * -> A data structure that contains a head, tail and length
 *   property
 * -> Linked lists consist of nodes, and each node has a value
 *   and a pointer to another node or null
 */

class Nodes {
  next: Nodes | null = null;
  constructor(public value: number) {}
}
export class SinglyLInkedList {
  public length: number = 0;
  public head: Nodes | null = null;
  public tail: Nodes | null = null;
  constructor(value: number) {
    const NewNode = new Nodes(value);
    this.head = NewNode;
    this.tail = this.head;
    this.length++;
  }
  /**Push 
   *the push List works by looping for the last node on linkLis 
    then put the new node on the last then put the nex node on 
    the tail list and increase the long list
   */
  push(value: number) {
    const NewNode = new Nodes(value);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next !== null) {
        currentNode = currentNode.next;
      } else {
        currentNode.next = NewNode;
        this.tail = currentNode.next;
        this.length++;
        return;
      }
    }
  }
  /**Pop
   * pop function works wb looping the the second last
   * value because wee need to hold the second last value
   * to remove the lost value, while we hold the second last
   * value we change the last value withe null and the tail
   * with second last value
   */
  pop() {
    let currentNode = this.head;
    let longLists = this.length - 2;
    let loopCount = 0;
    while (currentNode) {
      if (loopCount < longLists) {
        currentNode = currentNode.next;
      } else if (longLists < 0) {
        this.head = null;
        this.tail = this.head;
        this.length--;
        console.log(longLists);
        return;
      } else {
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
        return;
      }
      loopCount++;
    }
  }
}
