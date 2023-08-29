/** Doubly Linked Lists  lists
 * -> A data structure that contains a head, tail and length
 *   property
 * -> Linked lists consist of nodes, and each node has a value
 *   and a pointer to another node or null, doubly liked list have
 *   next and previous pointer and make it easier to search
 */
export class Nodes<T> {
  next: Nodes<T> | null = null;
  prev: Nodes<T> | null = null;
  constructor(public value: T | number) {}
}
export class DoublyLinkedLists<T> {
  public length: number = 0;
  public head: Nodes<T> | null = null;
  public tail: Nodes<T> | null = null;
  constructor(value: T | null = null) {
    this.push(value);
  }
  /** Push
   * Double linked list push work almost same with the singly but the
   * different we put the prev pointer first on new node
   */
  push(value: T | null) {
    const NewNode = new Nodes(value);
    if (value === null) return this;
    if (!this.head) {
      this.head = NewNode as Nodes<T>;
      this.tail = this.head;
      this.length++;
      return this;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next !== null) {
        currentNode = currentNode.next;
      } else {
        currentNode.next = NewNode as Nodes<T>;
        NewNode.prev = currentNode;
        this.tail = currentNode.next;
        this.length++;
        return this;
      }
    }
  }
  pushMuch(arr: T[]) {
    if (!arr.length) return this;
    let value = arr.shift()!;
    this.push(value);
    this.pushMuch(arr);
    return this;
  }
  /**pop
   * on Double linked list to pop the last item, we just need to
   * change the last item to the previous of the last item
   */
  pop() {
    let currentTail = this.tail;
    let longLists = this.length - 2;
    if (longLists < 0) {
      this.head = null;
      this.tail = this.head;
    } else if (currentTail?.prev) {
      this.tail = currentTail.prev;
      this.tail.next = null;
    }
    this.length--;
    return this;
  }
  /**shift
     *shift works by remove the first node on list with certain 
      conditions if no link list return this if only one link 
      list remove all change to the null if there is more then 
      one change the first value to the next 
     */
  shift() {
    let currentNode = this.head;
    let longLists = this.length;
    if (longLists <= 0) {
      return this;
    } else if (longLists === 1) {
      this.head = null;
      this.tail = this.head;
      this.length--;
      return this;
    } else if (currentNode) {
      currentNode = currentNode?.next;
      currentNode!.prev = null;
      this.head = currentNode;
      this.length--;
      return this;
    }
  }
  /**Unshifting
   * Adding a new node on the beginning of the linked list
   */
  unshifting(value: T) {
    const NewNode = new Nodes(value);
    let currentNode = this.head;
    let longLists = this.length;
    if (longLists < 0) {
      this.head = NewNode;
      this.tail = this.head;
      this.length++;
      return this;
    } else {
      if (currentNode?.prev === null) currentNode.prev = NewNode;
      this.head = NewNode;
      NewNode.next = currentNode;
      this.length++;
    }
  }
  /** get
   * get use to return the node base on the number position,
   * on the function we put num-1 on the indexNode we look
   * because we start the loop count on 0 and we put the first
   * list with length 1 so we need to put the equal comparison
   * among the loop count and the list length so we can get the
   * right node
   */
  get(num: number) {
    const nodeLength = this.length;
    if (num <= 0)
      throw new Error("node can't have order number 0 'Zero' or lower");
    else if (num > nodeLength)
      throw new Error(`${num} is over  the node length ${nodeLength}`);
    else if (num === nodeLength) return this.tail;
    const indexNode = num - 1;
    let currentNode = this.head;
    let loopCount = 0;
    while (currentNode) {
      if (indexNode === loopCount) {
        return currentNode;
      }
      currentNode = currentNode.next;
      loopCount++;
    }
  }
  /** set
   * this function accept a value and index, use to update the value without
   * change the order find specific node if the node is not found return
   */
  set(indx: number, value: T) {
    const indexNode = this.get(indx);
    if (!indexNode) throw new Error("no match index found");
    else {
      indexNode.value = value;
      return indexNode;
    }
  }
  /**Insert
   * Adding a node to the linked lists at specific position
   * if the index is lower then 0 or there is no node exist we
   * put the value as new node, if the index is bigger then the
   * node length we put the value as new node,if the index is
   * one we use the value to unshift the node, then if then
   * index is inside the range of node order we will looping
   * to the two node before the match index so the next node
   * of two node before can hold the new node and the new node
   *  will hold then rest next node with the next pointer then
   * the last one we increase the length
   */
  insert(indx: number, value: T) {
    const NewNode = new Nodes(value);
    const nodeLength = this.length;
    if (nodeLength === 0) {
      this.head = NewNode;
      this.tail = this.head;
      this.length++;
      return this;
    } else if (indx > nodeLength) {
      const lastNode = this.get(nodeLength);
      if (lastNode?.next === null) {
        NewNode.prev = lastNode;
        lastNode.next = NewNode;
        this.tail = NewNode;
        this.length++;
      }
    } else if (indx <= 1) {
      const InsertOnFirstNode = this.unshifting(value);
      return InsertOnFirstNode;
    } else {
      const currentNode = this.get(indx - 1);
      let backPointer = currentNode;
      let frondPointer = currentNode?.next!;
      if (backPointer?.next) backPointer.next = NewNode;
      NewNode.prev != backPointer;
      NewNode.next = frondPointer;
      frondPointer.prev = NewNode;
      this.length++;
      return NewNode;
    }
  }
  /** Remove
   * Remove use to remove the node on specific position,
   * if the index is smaller then list length we unshift the
   * node, if the index is greater then the list length we pop
   *  the node, if the index is in the range of the lists we
   * loop the node until the index-1 then we remove the
   * indexNode by put the beckNext pointer to the frontNext
   * pointer
   */
  remove(index: number) {
    if (index > this.length && this.tail?.prev) {
      const lastNode = this.tail;
      this.pop();
      return lastNode;
    } else if (index <= 1) {
      const currentHead = this.head;
      this.shift();
      return currentHead;
    } else {
      const currentNode = this.get(index - 1);
      if (currentNode) {
        const removeNode = currentNode?.next;
        const frontPointer = removeNode?.next!;
        if (currentNode?.next) currentNode.next = frontPointer;
        frontPointer.prev = currentNode;
        this.length--;
        return removeNode;
      }
    }
  }
  /**Reverse
     *Reverse works by build some End node to put on the next 
      pointer next node then the first node already modifier put 
      the Custom variable, then the cycle will repeat until the 
      last pinter and all the list get reverse because all the 
      prevNode get put on the next current node  
  
      for reverse the list on the class we put several addition 
      where we put the head value on tail first then we change 
      the reverse result as the head  
     */
  reverse() {
    if (!this.head) return this;
    if (this.length <= 1) return this;
    let currentNode = this.head;
    let TempNode: null | Nodes<T> = null;
    let previousHead = this.head;
    previousHead?.next != null;
    this.tail = previousHead;
    while (currentNode) {
      let NextNode = currentNode?.next!;
      currentNode.prev = currentNode.next!;
      currentNode!.next = TempNode;
      TempNode = currentNode;
      currentNode = NextNode;
    }
    this.head = TempNode;
    return this;
  }
  prettyPrint() {
    let currentNode = this.head;
    let PrettyPrint = "";
    while (currentNode) {
      let values = currentNode?.value;
      PrettyPrint += `(${values}) <==> `;
      currentNode = currentNode.next;
    }
    return PrettyPrint;
  }
}
class Node {
  public next: Node | null = null;
  public prev: Node | null = null;
  constructor(public val: number) {
    this.val = val;
  }
}

export class DoublyLinkedListSec {
  public head: Node | null = null;
  public tail: Node | null = null;
  public length: number = 0;

  push(val: number) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return;
    let frontPointer = this.head;
    this.head = this.head.next;
    this.head!.prev = null;
    this.length--;
    return frontPointer;
  }
  unshift(val: number) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.head.prev = node;
      let frontPointer = this.head;
      this.head = node;
      this.head.next = frontPointer;
    }
    this.length++;
    return this;
  }
  get(index: number) {
    if (!this.length) return;
    let currentNode = this.head;
    while (index) {
      currentNode = currentNode?.next!;
      index--;
    }
    return currentNode;
  }
  remove(index: number) {
    if (index === 0) {
      return this.shift();
    } else {
      let backPointer = this.get(index - 1)!;
      let removeNode = backPointer.next!;
      backPointer.next = removeNode.next;
      backPointer.next!.prev = backPointer;
      this.length--;
      return removeNode;
    }
  }
  pop() {
    if (!this.head) return;
    if (this.length === 1) {
      let removeNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removeNode;
    } else {
      let removeNode = this.tail;
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      this.length--;
      return removeNode;
    }
  }
  insert(index: number, val: number) {
    if (index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    } else {
      let newNode = new Node(val);
      let backPointer = this.get(index - 1)!;
      let frontPointer = backPointer.next!;
      backPointer.next = newNode;
      newNode.next = frontPointer;
      newNode.prev = backPointer;
      this.length++;
      return true;
    }
  }
  // reverse() {
  //   if (this.length === 1) {
  //     return this;
  //   } else {
  //     let currentNode = this.head;
  //     let reverse = this.head;
  //     reverse!.next = null;
  //     this.tail = reverse;
  //     while (currentNode) {
  //       let nextNode = currentNode?.next!;
  //       currentNode.prev = currentNode.next;
  //       currentNode!.next = reverse;
  //       reverse = currentNode;
  //       currentNode = nextNode;
  //     }
  //     return reverse;
  //   }
  // }

  reverse() {
    if (this.length === 0) return undefined;
    if (this.length === 1) return this;
    else {
      let current = this.head;
      this.head = this.tail;
      this.tail = current;

      let prev = null;

      while (current) {
        let next = current.next;
        current.next = prev;
        current.prev = next;
        prev = current;
        current = next;
      }
      return this;
    }
  }
  traverse(node = this.head, list: number[] = []): number[] {
    if (!node) return list;
    list.push(node.val);
    return this.traverse(node.next, list);
  }
}
