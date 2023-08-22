import { describe, it, expect, beforeEach } from "vitest";
// import { reverseBetween } from "./LinkList";
import {
  printList,
  reverseList,
  reverseBetween,
  ListNode,
  DoubleLInkedLists,
  printDouble,
} from "./LinkList";
describe("Linked List ", () => {
  describe("reverse linked list", () => {
    it.each([
      {
        list: [1, 2, 3, 4, 5],
      },
    ])("$list get reverse", ({ list }) => {
      const linked = list.reduce(
        (acc, val) => new ListNode(val, acc),
        new ListNode(null, null)
      );

      const actual = reverseList(linked);
      expect(printList(actual)).toEqual(list);
    });
  });
  describe("reverse linked list between", () => {
    it.each([
      {
        list: [1, 2, 3, 4, 5],
        mn: [2, 4],
        output: [1, 4, 3, 2, 5],
      },
    ])("$list get reverse betwen", ({ list, mn, output }) => {
      const linked = list.reduce(
        (acc, val) => new ListNode(val, acc),
        new ListNode(null, null)
      );
      const reverse = reverseList(linked)!;
      const actual = reverseBetween(reverse, mn[0], mn[1]);
      expect(printList(actual)).toEqual(output);
    });
  });
  describe("flatter double Linked lists", () => {
    let suit: DoubleLInkedLists;
    beforeEach(() => {
      suit = new DoubleLInkedLists();
    });
    it.each([
      {
        linkedList: [1, 2, 3, [4]],
        output: [1, 2, 3, 4],
      },
    ])("$linkedList should return $output", ({ linkedList, output }) => {
      suit.insertTer(linkedList);
      suit.flatter()!;
      expect(printDouble(suit.head)).toEqual(output);
    });
  });

  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
});
