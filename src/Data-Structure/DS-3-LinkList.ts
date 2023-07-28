// export type DataValue=number|string|boolean
// export class Node {
//   next: Node | null = null;
//   prev: Node | null = null;
//   constructor(public value: DataValue) {}
// }
// export class LinkedList {
//   head:Node |null =null
//   tail:Node |null = null
//   length:number
//   constructor(value:DataValue) {
//     this.head =new Node(value)
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value:number) {
//     const newNode = new Node(value)
//     newNode.prev = this.tail;
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }
//   prepend(value:number) {
//     const newNode = new Node(value)
//     newNode.next = this.head;
//     this.head.prev = newNode;
//     this.head = newNode;
//     this.length++;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return array;
//   }
//   private traverseToIndex(index:number) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
//   insert(index:number,value:number) {
//     if (index === 0) {
//       this.prepend(value);
//       return this.printList();
//     }
//     if (index >= this.length) {
//       this.append(value);
//       return this.printList();
//     }
//     const newNode = new Node(value)
//     const leader = this.traverseToIndex(index - 1);
//     const follower = leader.next;
//     leader.next = newNode;
//     newNode.prev = leader;
//     newNode.next=follower;
//     follower.prev = newNode;
//     follower;
//     this.length++;
//     return this.printList()
//   }
//   remove(index:number) {
//     if (index >= this.length || index <= this.length) {
//       return this.printList();
//     }
//     const leader = this.traverseToIndex(index - 1);
//     const unWantedNode = leader.next;
//     leader.next = unWantedNode.next;
//     this.length--;
//     return this.printList();
//   }
//   reverse() {
//     if (!this.head.next) {
//       return this.head;
//     }
//     let first = this.head;
//     this.tail = this.head;
//     let second = first.next;
//     while (second) {
//       const temp = second.next;
//       second.next = first;
//       first = second;
//       second = temp;
//     }
//     this.head.next = null;
//     this.head = first;
//     return this.printList();
//   }
// }
