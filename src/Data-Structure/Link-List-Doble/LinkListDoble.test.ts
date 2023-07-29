import { describe, it, expect, beforeEach } from "vitest";
import { LinkedListDoable } from "./index";

describe("Link List Dobla suit", () => {
  let suit: LinkedListDoable;
  beforeEach(() => {
    suit = new LinkedListDoable(1);
  });
  it("should append new value on link list", () => {
    suit.append(2);
    suit.append(3);
    suit.append(4);
    expect(suit.head?.value).toBe(1);
    expect(suit.head?.next?.value).toBe(2);
    expect(suit.head?.next?.next?.value).toBe(3);
    expect(suit.head?.next?.next?.next?.value).toBe(4);
    expect(suit.head?.next?.next?.next?.next).toBe(null);
    // const actual = JSON.stringify(suit.printList(), null, 2);
    // console.log(actual);
    expect(suit.printList()).toEqual([1, 2, 3, 4]);
  });
  it("should prepend new value on the first place", () => {
    suit.prepend(2);
    suit.prepend(3);
    suit.prepend(4);
    expect(suit.head?.value).toBe(4);
    expect(suit.head?.next?.value).toBe(3);
    expect(suit.head?.next?.next?.value).toBe(2);
    expect(suit.head?.next?.next?.next?.value).toBe(1);
    expect(suit.head?.next?.next?.next?.next).toBe(null);
  });
  it("should return the list data as an array ", () => {
    suit.append(2);
    suit.append(3);
    suit.append(4);
    expect(suit.printList()).toEqual([1, 2, 3, 4]);
  });
  it("should cunt the node by the index ", () => {
    suit.append(2);
    suit.append(3);
    suit.append(4);
    expect(suit.head).toEqual(suit.traverseToIndex(0));
    expect(suit.head?.next).toEqual(suit.traverseToIndex(1));
    expect(suit.head?.next?.next).toEqual(suit.traverseToIndex(2));
    expect(suit.head?.next?.next?.next).toEqual(suit.traverseToIndex(3));
    expect(suit.traverseToIndex(4)).toBe(null);
    expect(suit.traverseToIndex(5)).toBe(null);
    expect(suit.traverseToIndex(-1)).toBe(null);
  });
  it("should insert new node inside the link list", () => {
    suit.append(3);
    suit.insert(1, 2);
    suit.append(4);
    expect(suit.head?.value).toBe(1);
    expect(suit.head?.next?.value).toBe(2);
    expect(suit.head?.next?.next?.value).toBe(3);
    expect(suit.head?.next?.next?.next?.value).toBe(4);
  });
});