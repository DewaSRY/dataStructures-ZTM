`
Given a liked list and numbers m an n return it 
back withe only position m to n in reverse
//test case 
->Will m and n always be within the bounds of the liked list ?
=>Yes, assume 1 <= m <=n<=length of linked list 
->Can we receive m and n values for the whole linked list ?
=>Yes, we can receive m=1 and n =length of linked list
`;
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
export const reverseBetween = (head: ListNode, m: number, n: number) => {
  let currentPos = 1,
    currentNode = head;
  let start = head;
  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next!;
    currentPos++;
  }
  let newList = null,
    tail = currentNode;
  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next!;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }
  start.next = newList;
  tail.next = currentNode;
  if (m > 1) {
    return head;
  } else {
    return newList;
  }
};

// printList(linkedList);
// printList(reverseBetween(linkedList, 2, 4));
