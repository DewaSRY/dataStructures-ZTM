import { describe, it, expect, beforeEach } from "vitest";
import { Stack } from "./index";

describe("stack test suit", () => {
  let suit: Stack;
  beforeEach(() => {
    suit = new Stack(1);
  });
  it("should add new value on the stack", () => {
    suit.push(2);
    suit.push(3);
    expect(suit.printValue).toEqual([
      {
        value: 1,
        prev: null,
        next: 2,
      },
      {
        value: 2,
        prev: 1,
        next: 3,
      },
      {
        value: 3,
        prev: 2,
        next: null,
      },
    ]);
  });
  it("should return the top value", () => {
    suit.push(2);
    suit.push(3);
    expect(suit.peek()).toEqual({
      value: 3,
      prev: 2,
      next: null,
    });
  });
  it("should add new value on the stack", () => {
    suit.push(2);
    suit.push(3);
    suit.push(4);
    suit.pop();
    expect(suit.printValue).toEqual([
      {
        value: 1,
        prev: null,
        next: 2,
      },
      {
        value: 2,
        prev: 1,
        next: 3,
      },
      {
        value: 3,
        prev: 2,
        next: null,
      },
    ]);
  });
});
