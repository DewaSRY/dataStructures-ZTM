import { it, describe, expect, beforeEach } from "vitest";
import { DoublyLinkedLists } from "./DoublyLinkedLists";
describe.skip("DoublyLinkedLists test suit", () => {
  let suit: DoublyLinkedLists<number>;
  beforeEach(() => {
    suit = new DoublyLinkedLists<number>(1);
  });
  it("initiate link list should define the first value", () => {
    expect(suit.head?.value).toBe(1);
  });
  describe("push should add new value on node and have the new node as a tail", () => {
    it("push 2 items", () => {
      suit.push(2);
      expect(suit.length).toBe(2);
      expect(suit.tail?.value).toBe(2);
      expect(suit.tail?.prev?.value).toBe(1);
      expect(suit.head?.next?.value).toBe(2);
      expect(suit.head?.value).toBe(1);
      expect(suit.head?.prev).toBe(null);
    });
    it("push 3 items", () => {
      suit.push(2)?.push(3);
      expect(suit.tail?.value).toBe(3);
      expect(suit.tail?.prev?.value).toBe(2);
      expect(suit.get(2)?.prev?.value).toBe(1);
      expect(suit.get(3)?.prev?.value).toBe(2);
    });
    it("push 4 item", () => {
      suit.push(2)?.push(3)?.push(4);
      expect(suit.tail?.value).toBe(4);
      expect(suit.tail?.prev?.value).toBe(3);
      expect(suit.get(2)?.prev?.value).toBe(1);
      expect(suit.get(3)?.prev?.value).toBe(2);
      expect(suit.get(4)?.prev?.value).toBe(3);
    });
  });
  describe("pop should remove the last item on Linked lists ", () => {
    it("pop one time", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.pop();
      expect(suit.tail?.value).toBe(3);
      expect(suit.tail?.prev?.value).toBe(2);
      expect(suit.get(2)?.prev?.value).toBe(1);
      expect(suit.get(3)?.prev?.value).toBe(2);
    });
    it("pop two time", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.pop();
      suit.pop();
      expect(suit.tail?.value).toBe(2);
      expect(suit.tail?.prev?.value).toBe(1);
      expect(suit.get(2)?.prev?.value).toBe(1);
    });
    it("pop three time", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.pop();
      suit.pop();
      suit.pop();
      expect(suit.tail?.value).toBe(1);
      expect(suit.head?.value).toBe(1);
    });
    it("pop four time", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.pop();
      suit.pop();
      suit.pop();
      suit.pop();
      expect(suit.length).toBe(0);
      expect(suit.head).toBe(null);
      expect(suit.tail).toBe(null);
    });
  });
  describe("shift shift should remove the fist item change it with second lists", () => {
    it("shift one time", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.shift();
      expect(suit.head?.value).toBe(2);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(3);
      expect(suit.get(2)?.prev?.value).toBe(2);
    });
    it("shift two time", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.shift();
      suit.shift();
      expect(suit.head?.value).toBe(3);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(4);
      expect(suit.get(2)?.prev?.value).toBe(3);
    });
    it("shift three time", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.shift();
      suit.shift();
      suit.shift();
      expect(suit.tail?.value).toBe(4);
      expect(suit.head?.value).toBe(4);
    });
    it("shift four time", () => {
      suit.push(2)?.push(3)?.push(4);
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
      suit.push(2)?.push(3)?.push(4);
      suit.unshifting(5);
      expect(suit.head?.value).toBe(5);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(1);
      expect(suit.get(2)?.prev?.value).toBe(5);
    });
    it("unshifting two time", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.unshifting(5);
      suit.unshifting(6);
      expect(suit.head?.value).toBe(6);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(5);
      expect(suit.get(2)?.prev?.value).toBe(6);
    });
    it("unshifting three time", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.unshifting(5);
      suit.unshifting(6);
      suit.unshifting(7);
      expect(suit.head?.value).toBe(7);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(6);
      expect(suit.get(2)?.prev?.value).toBe(7);
    });
    it("unshifting four time", () => {
      suit.push(2)?.push(3)?.push(4);
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
      suit.push(2)?.push(3)?.push(4);
      expect(suit.get(1)?.value).toBe(1);
      expect(suit.get(2)?.value).toBe(2);
      expect(suit.get(3)?.value).toBe(3);
      expect(suit.get(4)?.value).toBe(4);
    });
    it.fails("error on get node out of range", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.get(10);
    });
    it.fails("error on get node withe order zero or lower", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.get(0);
    });
  });
  describe("set should update the value of the given order  link list", () => {
    it("set at first node", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.set(1, 10);
      expect(suit.head?.value).toBe(10);
      expect(suit.get(2)?.prev?.value).toBe(10);
    });
    it("set at last node", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.set(4, 10);
      expect(suit.tail?.value).toBe(10);
      expect(suit.get(4)?.value).toBe(10);
    });
    it("set at last node", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.set(2, 10);
      expect(suit.head?.next?.value).toBe(10);
      expect(suit.get(2)?.value).toBe(10);
      expect(suit.get(3)?.prev?.value).toBe(10);
    });
  });
  describe("insert should add new node on specific order", () => {
    it("at zero order", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.insert(0, 12);
      expect(suit.head?.value).toBe(12);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.prev?.value).toBe(12);
      expect(suit.get(3)?.value).toBe(2);
      expect(suit.get(3)?.prev?.value).toBe(1);
    });
    it("at first order", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.insert(1, 12);
      expect(suit.head?.value).toBe(12);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.prev?.value).toBe(12);
      expect(suit.get(3)?.value).toBe(2);
      expect(suit.get(3)?.prev?.value).toBe(1);
    });
    it("at middle order", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.insert(2, 12);
      expect(suit.head?.value).toBe(1);
      expect(suit.head?.next?.value).toBe(12);
      expect(suit.get(2)?.value).toBe(12);
      expect(suit.get(3)?.value).toBe(2);
      expect(suit.get(3)?.prev?.value).toBe(12);
    });
    it("at last order", () => {
      suit.push(2)?.push(3)?.push(4);
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
      suit.push(2)?.push(3)?.push(4);
      expect(suit.remove(1)?.value).toBe(1);
      expect(suit.head?.value).toBe(2);
      expect(suit.head?.prev).toBe(null);
      expect(suit.get(2)?.value).toBe(3);
      expect(suit.get(2)?.prev?.value).toBe(2);
    });
    it("remove lastItem item", () => {
      suit.push(2)?.push(3)?.push(4);
      suit.pop();
      expect(suit.tail?.value).toBe(3);
      expect(suit.tail?.prev?.value).toBe(2);
      expect(suit.get(2)?.prev?.value).toBe(1);
      expect(suit.get(3)?.prev?.value).toBe(2);
    });
    it("remove middle item", () => {
      suit.push(2)?.push(3)?.push(4);
      expect(suit.remove(2)?.value).toBe(2);
      expect(suit.head?.value).toBe(1);
      expect(suit.head?.next?.value).toBe(3);
      expect(suit.get(2)?.value).toBe(3);
      expect(suit.get(2)?.prev?.value).toBe(1);
    });
  });
  it("reverse should reverse the link lists ", () => {
    suit.push(2)?.push(3)?.push(4);
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
    suit.push(2)?.push(3)?.push(4);
    expect(suit.prettyPrint()).toMatchInlineSnapshot(
      '"(1) <==> (2) <==> (3) <==> (4) <==> "'
    );
  });
});
