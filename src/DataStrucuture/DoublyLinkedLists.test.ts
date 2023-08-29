import { it, describe, expect, beforeEach } from "vitest";
import { DoublyLinkedLists, DoublyLinkedListSec } from "./DoublyLinkedLists";
describe.skip("DoublyLinkedLists test suit", () => {
  let suit: DoublyLinkedLists<number>;
  beforeEach(() => {
    suit = new DoublyLinkedLists<number>();
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
      suit.pushMuch([1, 2, 3, 4, 5, 6, 7, 8, 9]);
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
    it("shift one time", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.shift();
      expect(suit.head?.value).toBe(2);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(3);
      expect(suit.get(2)?.prev?.value).toBe(2);
    });
    it("shift two time", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.shift();
      suit.shift();
      expect(suit.head?.value).toBe(3);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(4);
      expect(suit.get(2)?.prev?.value).toBe(3);
    });
    it("shift three time", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.shift();
      suit.shift();
      suit.shift();
      expect(suit.tail?.value).toBe(4);
      expect(suit.head?.value).toBe(4);
    });
    it("shift four time", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.shift();
      suit.shift();
      suit.shift();
      suit.shift();
      expect(suit.length).toBe(0);
      expect(suit.head).toBe(null);
      expect(suit.tail).toBe(null);
    });
  });
  describe("unshifting should add new to the first list", () => {
    it("unshifting one time", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.unshifting(5);
      expect(suit.head?.value).toBe(5);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(1);
      expect(suit.get(2)?.prev?.value).toBe(5);
    });
    it("unshifting two time", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.unshifting(5);
      suit.unshifting(6);
      expect(suit.head?.value).toBe(6);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(5);
      expect(suit.get(2)?.prev?.value).toBe(6);
    });
    it("unshifting three time", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.unshifting(5);
      suit.unshifting(6);
      suit.unshifting(7);
      expect(suit.head?.value).toBe(7);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(6);
      expect(suit.get(2)?.prev?.value).toBe(7);
    });
    it("unshifting four time", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.unshifting(5);
      suit.unshifting(6);
      suit.unshifting(7);
      suit.unshifting(8);
      expect(suit.head?.value).toBe(8);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(7);
      expect(suit.get(2)?.prev?.value).toBe(8);
    });
  });
  describe("get will return the right node base the index have put", () => {
    it("get will return match node", () => {
      suit.pushMuch([1, 2, 3, 4]);
      expect(suit.get(1)?.value).toBe(1);
      expect(suit.get(2)?.value).toBe(2);
      expect(suit.get(3)?.value).toBe(3);
      expect(suit.get(4)?.value).toBe(4);
    });
    it("error on get node out of range", () => {
      suit.pushMuch([1, 2, 3, 4]);
      expect(() => suit.get(10)).toThrowErrorMatchingInlineSnapshot(
        '"10 is over  the node length 4"'
      );
    });
    it("error on get node withe order zero or lower", () => {
      suit.pushMuch([1, 2, 3, 4]);
      expect(() => suit.get(0)).toThrowErrorMatchingInlineSnapshot(
        "\"node can't have order number 0 'Zero' or lower\""
      );
    });
  });
  describe("set should update the value of the given order  link list", () => {
    it("set at first node", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.set(1, 10);
      expect(suit.head?.value).toBe(10);
      expect(suit.get(2)?.prev?.value).toBe(10);
    });
    it("set at last node", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.set(4, 10);
      expect(suit.tail?.value).toBe(10);
      expect(suit.get(4)?.value).toBe(10);
    });
    it("set at last node", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.set(2, 10);
      expect(suit.head?.next?.value).toBe(10);
      expect(suit.get(2)?.value).toBe(10);
      expect(suit.get(3)?.prev?.value).toBe(10);
    });
  });
  describe("insert should add new node on specific order", () => {
    it("at zero order", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.insert(0, 12);
      expect(suit.head?.value).toBe(12);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.prev?.value).toBe(12);
      expect(suit.get(3)?.value).toBe(2);
      expect(suit.get(3)?.prev?.value).toBe(1);
    });
    it("at first order", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.insert(1, 12);
      expect(suit.head?.value).toBe(12);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.prev?.value).toBe(12);
      expect(suit.get(3)?.value).toBe(2);
      expect(suit.get(3)?.prev?.value).toBe(1);
    });
    it("at middle order", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.insert(2, 12);
      expect(suit.head?.value).toBe(1);
      expect(suit.head?.next?.value).toBe(12);
      expect(suit.get(2)?.value).toBe(12);
      expect(suit.get(3)?.value).toBe(2);
      expect(suit.get(3)?.prev?.value).toBe(12);
    });
    it("at last order", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.insert(10, 12);
      expect(suit.tail?.value).toBe(12);
      expect(suit.get(4)?.next?.value).toBe(12);
      expect(suit.get(4)?.value).toBe(4);
      expect(suit.get(5)?.value).toBe(12);
      expect(suit.get(5)?.prev?.value).toBe(4);
    });
  });
  describe("remove should eraser the node on specific order", () => {
    it("remove first item", () => {
      suit.pushMuch([1, 2, 3, 4]);
      expect(suit.remove(1)?.value).toBe(1);
      expect(suit.head?.value).toBe(2);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(3);
      expect(suit.get(2)?.prev?.value).toBe(2);
    });
    it("remove lastItem item", () => {
      suit.pushMuch([1, 2, 3, 4]);
      suit.pop();
      expect(suit.tail?.value).toBe(3);
      expect(suit.tail?.prev?.value).toBe(2);
      expect(suit.get(2)?.prev?.value).toBe(1);
      expect(suit.get(3)?.prev?.value).toBe(2);
    });
    it("remove middle item", () => {
      suit.pushMuch([1, 2, 3, 4]);
      expect(suit.remove(2)?.value).toBe(2);
      expect(suit.head?.value).toBe(1);
      expect(suit.head?.next?.value).toBe(3);
      expect(suit.get(2)?.value).toBe(3);
      expect(suit.get(2)?.prev?.value).toBe(1);
    });
  });
  it("reverse should reverse the link lists ", () => {
    suit.pushMuch([1, 2, 3, 4]);
    suit.reverse();
    expect(suit.head?.value).toBe(4);
    expect(suit.get(2)?.value).toBe(3);
    expect(suit.get(3)?.value).toBe(2);
    expect(suit.get(4)?.value).toBe(1);
    expect(suit.prettyPrint()).toMatchInlineSnapshot(
      '"(4) <==> (3) <==> (2) <==> (1) <==> "'
    );
    expect(suit.head?.prev).toBe(null);
    expect(suit.get(2)?.prev?.value).toBe(4);
    expect(suit.get(3)?.prev?.value).toBe(3);
    expect(suit.get(4)?.prev?.value).toBe(2);

    suit.reverse();
    expect(suit.head?.value).toBe(1);
    expect(suit.get(2)?.value).toBe(2);
    expect(suit.get(3)?.value).toBe(3);
    expect(suit.get(4)?.value).toBe(4);
    expect(suit.prettyPrint()).toMatchInlineSnapshot(
      '"(1) <==> (2) <==> (3) <==> (4) <==> "'
    );
    expect(suit.head?.prev).toBe(null);
    expect(suit.get(2)?.prev?.value).toBe(1);
    expect(suit.get(3)?.prev?.value).toBe(2);
    expect(suit.get(4)?.prev?.value).toBe(3);
  });
  it("should return the pretty print of linked list", () => {
    suit.pushMuch([1, 2, 3, 4]);
    expect(suit.prettyPrint()).toMatchInlineSnapshot(
      '"(1) <==> (2) <==> (3) <==> (4) <==> "'
    );
  });
});
describe("component ", () => {
  let t = new DoublyLinkedListSec();
  it("test", () => {
    [5, 10, 15, 20].forEach((num) => t.push(num));
    console.log(t.reverse());
    console.log(t.traverse());
    console.log(t.length);
    console.log(t?.head?.val);

    console.log(t?.head?.next?.prev?.val);
    console.log(t?.head?.next?.next?.val);
    console.log(t?.head?.next?.next?.next?.val);
  });
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
});
