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
  push(value: number) {
    const NewNode = new Nodes(value);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next !== null) {
        currentNode = currentNode.next;
      } else {
        currentNode.next = NewNode;
        this.tail = currentNode.next;
        return;
      }
    }
  }
}
