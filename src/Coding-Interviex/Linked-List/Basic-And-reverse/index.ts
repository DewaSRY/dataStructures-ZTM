`
Given a linked list, return it in reverse
`;
/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

export class ListNode {
  public val: number | null;
  public next: ListNode | null;
  constructor(val: number | null, next: null | ListNode = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
export const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  new ListNode(null, null)
);

// ---- Generate our linked list ----

export const printList = (head: ListNode | null) => {
  const arr: number[] = [];
  let curetNode: ListNode | null = head;
  while (curetNode) {
    arr.push(curetNode.val!);
    curetNode = curetNode.next;
  }

  return arr;
};

// --------- Our solution -----------

export const reverseList = function (head: ListNode) {
  let prev = null;
  let current = head;

  while (current) {
    let nextTemp = current.next!;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  return prev;
};

// printList(linkedList);
// // console.log("after reverse");
// printList(reverseList(linkedList));
