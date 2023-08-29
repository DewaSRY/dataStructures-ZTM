import { it, describe, expect, beforeEach } from "vitest";
import { DoublyLinkedList } from "./DoublyLinkedLists";
describe.skip("DoublyLinkedLists test suit", () => {
  let suit: DoublyLinkedList;
  beforeEach(() => {
    suit = new DoublyLinkedList();
  });

  describe("push should add new value on node and have the new node as a tail", () => {
    it.each([
      { arr: [1, 2, 3, 4] },
      { arr: [1, 22, 33, 44, 55, 66, 77] },
      { arr: [1, 22, 6, 44, 2, 10, 1] },
    ])("should push $arr", ({ arr }) => {
      arr.forEach((num, idx) => {
        suit.push(num);
        expect(suit.head?.value).toBe(arr[0]);
        expect(suit.tail?.value).toBe(num);
        expect(suit.tail?.prev?.value).toBe(arr[idx - 1]);
      });
    });
  });
  describe("pop should remove the last item on Linked lists ", () => {
    beforeEach(() => {
      [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((num) => suit.push(num));
    });
    it.each([
      { arr: [1, 2, 3], length: 6 },
      { arr: [1], length: 8 },
      { arr: [1, 2], length: 7 },
    ])("pop $arr.length should leave length $length", ({ arr, length }) => {
      arr.forEach(() => suit.pop());
      expect(suit.length).toBe(length);
    });
  });
  describe("shift shift should remove the fist item change it with second lists", () => {
    beforeEach(() => {
      [1, 2, 3, 4].forEach((num) => suit.push(num));
    });
    it("shift one time", () => {
      suit.shift();
      expect(suit.head?.value).toBe(2);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(3);
      expect(suit.get(2)?.prev?.value).toBe(2);
    });
    it("shift two time", () => {
      suit.shift();
      suit.shift();
      expect(suit.head?.value).toBe(3);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(4);
      expect(suit.get(2)?.prev?.value).toBe(3);
    });
    it("shift three time", () => {
      suit.shift();
      suit.shift();
      suit.shift();
      expect(suit.tail?.value).toBe(4);
      expect(suit.head?.value).toBe(4);
    });
    it("shift four time", () => {
      suit.shift();
      suit.shift();
      suit.shift();
      suit.shift();
      expect(suit.length).toBe(0);
      expect(suit.head).toBe(null);
      expect(suit.tail).toBe(null);
    });
  });
  describe("unshift should add new to the first list", () => {
    beforeEach(() => {
      [1, 2, 3, 4].forEach((num) => suit.push(num));
    });
    it("unshifting one time", () => {
      suit.unshift(5);
      expect(suit.head?.value).toBe(5);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(1);
      expect(suit.get(2)?.prev?.value).toBe(5);
    });
    it("unshifting two time", () => {
      suit.unshift(5);
      suit.unshift(6);
      expect(suit.head?.value).toBe(6);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(5);
      expect(suit.get(2)?.prev?.value).toBe(6);
    });
    it("unshifting three time", () => {
      suit.unshift(5);
      suit.unshift(6);
      suit.unshift(7);
      expect(suit.head?.value).toBe(7);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(6);
      expect(suit.get(2)?.prev?.value).toBe(7);
    });
    it("unshifting four time", () => {
      suit.unshift(5);
      suit.unshift(6);
      suit.unshift(7);
      suit.unshift(8);
      expect(suit.head?.value).toBe(8);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(7);
      expect(suit.get(2)?.prev?.value).toBe(8);
    });
  });
  describe("get will return the right node base the index have put", () => {
    beforeEach(() => {
      [1, 2, 3, 4].forEach((num) => suit.push(num));
    });
    it("get will return match node", () => {
      expect(suit.get(1)?.value).toBe(1);
      expect(suit.get(2)?.value).toBe(2);
      expect(suit.get(3)?.value).toBe(3);
      expect(suit.get(4)?.value).toBe(4);
    });
    it("error on get node out of range", () => {
      expect(() => suit.get(10)).toThrowErrorMatchingInlineSnapshot(
        '"10 is over  the node length 4"'
      );
    });
    it("error on get node withe order zero or lower", () => {
      expect(() => suit.get(0)).toThrowErrorMatchingInlineSnapshot(
        "\"node can't have order number 0 'Zero' or lower\""
      );
    });
  });
  describe("set should update the value of the given order  link list", () => {
    beforeEach(() => {
      [1, 2, 3, 4].forEach((num) => suit.push(num));
    });
    it("set at first node", () => {
      suit.set(1, 10);
      expect(suit.head?.value).toBe(10);
      expect(suit.get(2)?.prev?.value).toBe(10);
    });
    it("set at last node", () => {
      suit.set(4, 10);
      expect(suit.tail?.value).toBe(10);
      expect(suit.get(4)?.value).toBe(10);
    });
    it("set at last node", () => {
      suit.set(2, 10);
      expect(suit.head?.next?.value).toBe(10);
      expect(suit.get(2)?.value).toBe(10);
      expect(suit.get(3)?.prev?.value).toBe(10);
    });
  });
  describe("insert should add new node on specific order", () => {
    it("at zero order", () => {
      suit.insert(0, 12);
      expect(suit.head?.value).toBe(12);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.prev?.value).toBe(12);
      expect(suit.get(3)?.value).toBe(2);
      expect(suit.get(3)?.prev?.value).toBe(1);
    });
    it("at first order", () => {
      suit.insert(1, 12);
      expect(suit.head?.value).toBe(12);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.prev?.value).toBe(12);
      expect(suit.get(3)?.value).toBe(2);
      expect(suit.get(3)?.prev?.value).toBe(1);
    });
    it("at middle order", () => {
      suit.insert(2, 12);
      expect(suit.head?.value).toBe(1);
      expect(suit.head?.next?.value).toBe(12);
      expect(suit.get(2)?.value).toBe(12);
      expect(suit.get(3)?.value).toBe(2);
      expect(suit.get(3)?.prev?.value).toBe(12);
    });
    it("at last order", () => {
      suit.insert(10, 12);
      expect(suit.tail?.value).toBe(12);
      expect(suit.get(4)?.next?.value).toBe(12);
      expect(suit.get(4)?.value).toBe(4);
      expect(suit.get(5)?.value).toBe(12);
      expect(suit.get(5)?.prev?.value).toBe(4);
    });
  });
  describe("remove should eraser the node on specific order", () => {
    beforeEach(() => {
      [1, 2, 3, 4].forEach((num) => suit.push(num));
    });
    it("remove first item", () => {
      expect(suit.remove(1)?.value).toBe(1);
      expect(suit.head?.value).toBe(2);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(3);
      expect(suit.get(2)?.prev?.value).toBe(2);
    });
    it("remove lastItem item", () => {
      suit.pop();
      expect(suit.tail?.value).toBe(3);
      expect(suit.tail?.prev?.value).toBe(2);
      expect(suit.get(2)?.prev?.value).toBe(1);
      expect(suit.get(3)?.prev?.value).toBe(2);
    });
    it("remove middle item", () => {
      expect(suit.remove(2)?.value).toBe(2);
      expect(suit.head?.value).toBe(1);
      expect(suit.head?.next?.value).toBe(3);
      expect(suit.get(2)?.value).toBe(3);
      expect(suit.get(2)?.prev?.value).toBe(1);
    });
  });
  it("reverse should reverse the link lists ", () => {
    suit.reverse();
    expect(suit.head?.value).toBe(4);
    expect(suit.get(2)?.value).toBe(3);
    expect(suit.get(3)?.value).toBe(2);
    expect(suit.get(4)?.value).toBe(1);

    expect(suit.head?.prev).toBe(null);
    expect(suit.get(2)?.prev?.value).toBe(4);
    expect(suit.get(3)?.prev?.value).toBe(3);
    expect(suit.get(4)?.prev?.value).toBe(2);

    suit.reverse();
    expect(suit.head?.value).toBe(1);
    expect(suit.get(2)?.value).toBe(2);
    expect(suit.get(3)?.value).toBe(3);
    expect(suit.get(4)?.value).toBe(4);

    expect(suit.head?.prev).toBe(null);
    expect(suit.get(2)?.prev?.value).toBe(1);
    expect(suit.get(3)?.prev?.value).toBe(2);
    expect(suit.get(4)?.prev?.value).toBe(3);
  });
});
