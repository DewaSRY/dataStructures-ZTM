/**
 *
 */
class LinkedNode {
  public next: LinkedNode | null = null;
  constructor(public val: number) {}
}

export class LinkedList {
  public head: LinkedNode | null = null;
  insert(value: number) {
    const newNode = new LinkedNode(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let currentNode = this.head!;
    while (currentNode !== null) {
      if (currentNode.next) currentNode = currentNode.next;
      else {
        currentNode.next = newNode;
        return this;
      }
    }
  }
  insertTer(arr: number[]) {
    let arrNum = arr;
    while (arrNum.length) {
      let val = arrNum.shift()!;
      if (val) this.insert(val);
    }
    return this;
  }
}

// ---- Generate our linked list ----
export const printList = (head: LinkedNode | null | DoubleNode) => {
  const arr: number[] = [];
  let curetNode: DoubleNode | LinkedNode | null = head;
  while (curetNode && curetNode.val) {
    arr.push(curetNode.val);
    curetNode = curetNode.next;
  }
  return arr;
};
// -------- Our solution -----------
/**reverse linked lists, the way we reverse the linked list is
 * we make the first pointer to be the last pointer
 * - we make separate
 *
 */
export const reverseList = function (head: LinkedNode) {
  let prev = null;
  let current = head;

  while (current) {
    let nextTemp = current.next!;
    current.next = prev;
    prev = current;

    current = nextTemp;
  }
  // console.log("test", printList(prev));
  return prev;
};
/** M,N reversals
 * Given a linked list and numbers m and n, return it back
 * with only position m to n in reverse,
 *
 */
export function reverseBetween(LinkedList: LinkedNode, n: number, m: number) {
  let leftP = 1;
  let currentNode = LinkedList;
  let backPinter = currentNode; //when the loop hit the n
  while (leftP < n) {
    backPinter = currentNode;
    currentNode = currentNode.next!;
    leftP++;
  }
  let frontPinter = currentNode; // when the lop hit the m
  let reverseNode = null;
  while (leftP >= n && leftP <= m) {
    let nextNode = currentNode.next!;
    currentNode.next = reverseNode;
    reverseNode = currentNode;
    currentNode = nextNode;
    leftP++;
  }
  backPinter.next = reverseNode;
  frontPinter.next = currentNode;
  return backPinter;
}
/** Double Linked Lists
 *  Given a doubly linked list, list nodes also have a child
 * property that can point to a separate doubly linked list.
 * these child lists can also have one or more child doubly
 * linked lists of their own, and so on. return the list as
 * single level flattened doubly linked lists
 */

class DoubleNode {
  public next: DoubleNode | null = null;
  public prev: DoubleNode | null = null;
  public child: DoubleNode | null = null;
  constructor(public val: number) {}
}

export class DoubleLInkedLists {
  public head: DoubleNode | null = null;

  insert(val: number) {
    let newNode = new DoubleNode(val);
    if (!this.head) {
      this.head = newNode;

      return this;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next) {
        currentNode = currentNode.next!;
      } else {
        let backPointer = currentNode;
        currentNode.next = newNode;
        newNode.prev = backPointer;
        return this;
      }
    }
    return this;
  }
  child(child: DoubleNode) {
    if (!this.head) {
      return this;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next) {
        currentNode = currentNode.next!;
      } else {
        let backPointer = currentNode;
        currentNode.child = child;
        child.prev = backPointer;
        return this;
      }
    }
    return this;
  }
  insertTer(arr: (number | number[])[]) {
    while (arr.length) {
      let value = arr.shift()!;
      if (typeof value === "number") {
        this.insert(value);
      } else {
        let child = new DoubleLInkedLists().insertTer(value);
        this.child(child.head!);
      }
    }
    return this;
  }
  migrateLists() {
    // if (!this.head) return this;
    return MigrateDoubleLinkedLists(this.head!);
  }
  flatter() {
    if (!this.head) return this;
    this.head = flatterSecond(this.head!);
    return this;
  }
}
export const printDouble = (head: null | DoubleNode) => {
  const arr: (number | number[])[] = [];
  let curetNode: DoubleNode | null = head;
  while (curetNode && curetNode.val) {
    arr.push(curetNode.val);
    if (curetNode.child) {
      let child = printDouble(curetNode.child) as number[];
      arr.push(child);
    }
    curetNode = curetNode.next;
  }
  return arr;
};
/**Migrate Double linked Lists
 *
 */
function MigrateDoubleLinkedLists(DoubleNode: DoubleNode) {
  if (!DoubleNode) return DoubleNode;
  let currentNode = DoubleNode;
  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next!;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = currentNode.next;
      if (tail.next !== null) {
        tail.next.prev = tail;
      }
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }
  return DoubleNode;
}
function flatterSecond(DoubleNode: DoubleNode) {
  if (!DoubleNode) return DoubleNode;
  let currentNode = DoubleNode;
  while (currentNode !== null) {
    if (!currentNode.child) {
      currentNode = currentNode.next!;
    } else {
      let child = currentNode.child!;
      while (child?.next !== null) {
        child = child?.next;
      }
      child.next = currentNode.next;
      if (child.next !== null) {
        child.next.prev = child;
      }
      currentNode.next = currentNode.child!;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }
  return DoubleNode;
}
/** Cycle Detection
 *
 */
