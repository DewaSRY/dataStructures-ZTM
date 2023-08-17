import { it, describe, expect, beforeAll } from "vitest";
import { SinglyLInkedList } from "./SinglyLinkedLists";
describe("SinglyLInkedList test suit", () => {
  let suit: SinglyLInkedList;
  beforeAll(() => {
    suit = new SinglyLInkedList(1);
  });

  it("define first value on Singly Linked List", () => {
    expect(suit.head?.value).toBe(1);
  });
  it("add new value on node and have the new node as a tail", () => {
    suit.push(2);
    expect(suit.head?.next?.value).toBe(2);
    expect(suit.tail?.value).toBe(2);
    suit.push(3);
    expect(suit.head?.next?.next?.value).toBe(3);
    expect(suit.tail?.value).toBe(3);
    expect(suit.length).toBe(3);
  });
  it("pop the last item on Linked lists ", () => {
    suit.push(4);
    suit.pop();

    console.log(suit);
    expect(suit.tail?.value).toBe(3);
    expect(suit.length).toBe(3);
    // suit.pop();
    // suit.pop();
    // suit.pop();
  });
});