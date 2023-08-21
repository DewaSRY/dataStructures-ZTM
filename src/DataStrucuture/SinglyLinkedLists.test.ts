import { it, describe, expect, beforeEach } from "vitest";
import { SinglyLInkedList } from "./SinglyLinkedLists";
describe.skip("SinglyLInkedList test suit", () => {
  let suit: SinglyLInkedList<number>;
  beforeEach(() => {
    suit = new SinglyLInkedList<number>(1);
  });
  it("initiate link list should define the first value", () => {
    expect(suit.head?.value).toBe(1);
  });
  it("push should add new value on node and have the new node as a tail", () => {
    suit.push(2)?.push(3);
    expect(suit.length).toBe(3);
    expect(suit.tail?.value).toBe(3);
    expect(suit.head?.next?.value).toBe(2);
    expect(suit.head?.next?.next?.value).toBe(3);
  });
  it("pop should remove the last item on Linked lists ", () => {
    suit.push(2)?.push(3)?.push(4);
    suit.pop();
    expect(suit.tail?.value).toBe(3);
    expect(suit.length).toBe(3);
    suit.pop();
    suit.pop();
    suit.pop();
    expect(suit.head).toBe(null);
    expect(suit.tail).toBe(null);
    expect(suit.length).toBe(0);
  });
  it("shift shift should remove the fist item change it with second lists", () => {
    suit.push(2)?.push(3)?.push(4);
    suit.shift();
    expect(suit.head?.value).toBe(2);
    suit.shift();
    expect(suit.head?.value).toBe(3);
    suit.shift();
    expect(suit.head?.value).toBe(4);
    suit.shift();
    expect(suit.head).toBe(null);
  });
  it("unshifting should add new to the first list", () => {
    suit.unshifting(2);
    expect(suit.head?.value).toBe(2);
    suit.unshifting(3);
    expect(suit.head?.value).toBe(3);
    suit.unshifting(4);
    expect(suit.head?.value).toBe(4);
  });
  it("get will return the right node base the index have put", () => {
    suit.push(2)?.push(3)?.push(4);
    expect(suit.get(1)?.value).toBe(1);
    expect(suit.get(2)?.value).toBe(2);
    expect(suit.get(3)?.value).toBe(3);
    expect(suit.get(4)?.value).toBe(4);
  });
  it.fails("error on get node out of range", () => {
    suit.get(10);
  });
  it.fails("error on get node withe order zero or lower", () => {
    suit.get(0);
  });
  it("set should update the value of the given order  link list", () => {
    suit.push(2)?.push(3)?.push(4);
    expect(suit.get(2)?.value).toBe(2);
    suit.set(2, 10);
    expect(suit.get(2)?.value).toBe(10);
    expect(suit.get(4)?.value).toBe(4);
    expect(suit.tail?.value).toBe(4);
    suit.set(4, 110);
    expect(suit.get(4)?.value).toBe(110);
    expect(suit.tail?.value).toBe(110);
  });
  it("insert should add new node on specific order", () => {
    suit.push(2)?.push(3)?.push(4);
    suit.insert(10, 10);
    expect(suit.get(5)?.value).toBe(10);
    expect(suit.tail?.value).toBe(10);
    suit.insert(1, 11);
    expect(suit.head?.value).toBe(11);
    suit.insert(2, 21);
  });
  it("remove should eraser the node on specific order", () => {
    suit.push(2)?.push(3)?.push(4);
    expect(suit.remove(1)?.value).toBe(1);
    expect(suit.get(1)?.value).toBe(2);
    expect(suit.remove(10)?.value).toBe(4);
    expect(suit.get(suit.length)?.value).toBe(3);
    suit.push(5)?.push(6);
    expect(suit.get(2)?.value).toBe(3);
    expect(suit.remove(2)?.value).toBe(3);
    suit.remove(10);
    suit.remove(10);
    expect(suit.remove(10)?.value).toBe(2);
    expect(suit.remove(10)?.value).toBeUndefined();
  });
  it("reverse should reverse the link lists ", () => {
    suit.push(2)?.push(3)?.push(4);
    suit.reverse();
    expect(suit.head?.value).toBe(4);
    expect(suit.get(2)?.value).toBe(3);
    expect(suit.get(3)?.value).toBe(2);
    expect(suit.get(4)?.value).toBe(1);
    suit.reverse();
    expect(suit.head?.value).toBe(1);
    expect(suit.get(2)?.value).toBe(2);
    expect(suit.get(3)?.value).toBe(3);
    expect(suit.get(4)?.value).toBe(4);
  });
  it("should return the pretty print of linked list", () => {
    suit.push(2)?.push(3)?.push(4);
    expect(suit.prettyPrint()).toMatchInlineSnapshot(
      '"(1)-> (2)-> (3)-> (4)-> "'
    );
  });
});
