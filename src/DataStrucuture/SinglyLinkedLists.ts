/** Singly linked lists
 * -> A data structure that contains a head, tail and length
 *   property
 * -> Linked lists consist of nodes, and each node has a value
 *   and a pointer to another node or null
 */
class Nodes<T> {
  next: Nodes<T> | null = null;
  constructor(public value: T) {}
}
export class SinglyLInkedList<T> {
  public length: number = 0;
  public head: Nodes<T> | null = null;
  public tail: Nodes<T> | null = null;
  constructor(value: T) {
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
  push(value: T) {
    const NewNode = new Nodes(value);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next !== null) {
        currentNode = currentNode.next;
      } else {
        currentNode.next = NewNode;
        this.tail = currentNode.next;
        this.length++;
        return this;
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
    let newTail = currentNode;
    while (currentNode?.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail!.next = null;
    this.length--;
    return currentNode;
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
   * this function accept a value and index, use your get to find specific node if the node is not found return
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
    let currentNode = this.head;
    let loopNum = 0;
    const nodeLength = this.length;
    if (nodeLength === 0) {
      this.head = NewNode;
      this.tail = this.head;
      this.length++;
      return this;
    } else if (indx > nodeLength) {
      const lastNode = this.get(nodeLength);
      if (lastNode?.next === null) {
        lastNode.next = NewNode;
        this.tail = NewNode;
        this.length++;
      }
    } else if (indx <= 1) {
      const InsertOnFirstNode = this.unshifting(value);
      return InsertOnFirstNode;
    } else {
      while (currentNode) {
        if (loopNum < indx - 2) {
          currentNode = currentNode.next;
          loopNum++;
        } else {
          const backPointer = currentNode;
          const frontPointer = currentNode.next;
          backPointer.next = NewNode;
          NewNode.next = frontPointer;
          this.length++;
          return NewNode;
        }
      }
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
    let currentNode = this.head;
    const LongNode = this.length;
    let LoopCount = 0;
    if (index > LongNode) {
      const lastNode = this.tail;
      this.pop();
      return lastNode;
    } else if (index <= 1 && currentNode?.next) {
      this.head = currentNode?.next;
      this.length--;
      return currentNode;
    } else if (LongNode <= 1) {
      this.head = null;
      this.tail = this.head;
      this.length--;
      // if(!LongNode)return
    } else {
      while (currentNode) {
        if (LoopCount < index - 1) {
          currentNode = currentNode.next;
          LoopCount++;
        } else {
          const backPointer = currentNode;
          const frontPointer = currentNode.next;
          if (frontPointer?.next) {
            backPointer.next = frontPointer?.next;
            this.length--;
            return backPointer;
          }
        }
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
    let currentNode = this.head;
    let lengthNode = this.length;
    if (lengthNode <= 1) return this;
    let TempNode: null | Nodes<T> = null;
    let previousHead = this.head;
    previousHead?.next != null;
    this.tail = previousHead;
    while (currentNode) {
      let NextNode = currentNode?.next;
      currentNode.next = TempNode;
      TempNode = currentNode;
      currentNode = NextNode;
    }
    this.head = TempNode;
    return TempNode;
  }
  prettyPrint() {
    let currentNode = this.head;
    let PrettyPrint = "";
    while (currentNode) {
      let values = currentNode?.value;
      PrettyPrint += `(${values})-> `;
      currentNode = currentNode.next;
    }
    return PrettyPrint;
  }
}
class Node {
  public next: Node | null = null;
  constructor(public val: number) {}
}

export class SecondSinglyLinkedList {
  public head: null | Node = null;
  public tail: null | Node = null;
  public length = 0;

  push(val: number) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current?.next!;
      counter++;
    }
    return current;
  }
  insert(index: number, value: number) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(value);
      return true;
    }
    var newNode = new Node(value);
    let prevNode = this.get(index - 1)!;
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
  rotate(index: number) {
    if (index < 0) {
      index = this.length + index;
    }
    if (index > this.length) {
      index = index % this.length;
    }
    if (index === 0) return;
    console.log(index);
    let newHead = this.head;
    let count = 1;
    while (count < index) {
      newHead = newHead?.next!;
      count++;
    }
    let kthNode = newHead;
    while (newHead?.next) {
      newHead = newHead.next;
    }
    newHead!.next = this.head;
    this.head = kthNode?.next!;
    kthNode!.next = null;
    this.tail = kthNode;
    console.log(this.tail);
  }
  remove(index: number) {
    let currentNode = this.head;
    while (index - 1) {
      currentNode = currentNode?.next!;
      index--;
    }
    let backPointer = currentNode?.next;
    currentNode!.next = backPointer?.next!;
    return backPointer;
  }
  printValue(node = this.head, newArr: number[] = []): number[] {
    if (!node) return newArr;
    newArr.push(node.val);
    return this.printValue(node.next, newArr);
  }
}
