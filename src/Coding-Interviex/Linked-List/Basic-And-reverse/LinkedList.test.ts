import { it, describe, expect } from "vitest";
import { ListNode, printList, reverseList } from "./index";

describe.skip("linked list test suit", () => {
  const normalArr = [5, 4, 3, 2, 1];
  const linkedList = normalArr.reduce(
    (acc, val) => new ListNode(val, acc),
    new ListNode(null, null)
  );
  it("should print the list", () => {
    const actual = printList(reverseList(linkedList));
    expect(actual).toEqual([null, 5, 4, 3, 2, 1]);
  });
});
