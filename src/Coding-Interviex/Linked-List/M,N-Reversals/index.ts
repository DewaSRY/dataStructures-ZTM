`
Given a liked list and numbers m an n return it 
back withe only position m to n in reverse
//test case 
->Will m and n always be within the bounds of the liked list ?
=>Yes, assume 1 <= m <=n<=length of linked list 
->Can we receive m and n values for the whole linked list ?
=>Yes, we can receive m=1 and n =length of linked list
`;
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

// ---- Generate our linked list ----

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

// --------- Our solution -----------

var reverseBetween = function (head, m, n) {
  let currentPos = 1,
    currentNode = head;
  let start = head;

  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null,
    tail = currentNode;

  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
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

printList(linkedList);
console.log("after reverse");
printList(reverseBetween(linkedList, 2, 4));
