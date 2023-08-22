import { describe, it, expect, beforeEach } from "vitest";
// import { reverseBetween } from "./LinkList";
import {
  printList,
  reverseList,
  reverseBetween,
  DoubleLInkedLists,
  printDouble,
  LinkedList,
} from "./LinkList";
describe("Linked List ", () => {
  describe("reverse linked list", () => {
    let suit: LinkedList;
    beforeEach(() => {
      suit = new LinkedList();
    });
    it.each([
      {
        list: [1, 2, 3, 4, 5],
        output: [5, 4, 3, 2, 1],
      },
    ])("$list get reverse", ({ list, output }) => {
      suit.insertTer(list);
      const actual = reverseList(suit.head!);
      console.log(printList(actual));
      expect(printList(actual)).toEqual(output);
    });
  });
  describe("reverse linked list between", () => {
    let suit: LinkedList;
    beforeEach(() => {
      suit = new LinkedList();
    });
    it.each([
      {
        list: [1, 2, 3, 4, 5],
        mn: [2, 4],
        output: [1, 4, 3, 2, 5],
      },
    ])("$list get reverse betwen", ({ list, mn, output }) => {
      suit.insertTer(list);
      const actual = reverseBetween(suit.head!, mn[0], mn[1]);
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
