import { it, describe, expect } from "vitest";
import { ListNode, printList, reverseBetween } from "./index";

describe("reverse Between m and n list test suit", () => {
  describe("first test", () => {
    const normalArr = [5, 4, 3, 2, 1];
    const linkedList = normalArr.reduce(
      (acc, val) => new ListNode(val, acc),
      new ListNode(null, null)
    );
    it("should print the list", () => {
      const actual = printList(reverseBetween(linkedList, 2, 4));
      expect(actual).toEqual([1, 4, 3, 2, 5, null]);
    });
  });
  describe("first test", () => {
    const normalArr = [7, 6, 5, 4, 3, 2, 1];
    const linkedList = normalArr.reduce(
      (acc, val) => new ListNode(val, acc),
      new ListNode(null, null)
    );
    it("should print the list", () => {
      const actual = printList(reverseBetween(linkedList, 2, 6));
      expect(actual).toMatchInlineSnapshot(`
        [
          1,
          6,
          5,
          4,
          3,
          2,
          7,
          null,
        ]
      `);
    });
  });
});
