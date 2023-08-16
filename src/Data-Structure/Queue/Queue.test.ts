import { describe, it, expect, beforeEach } from "vitest";
import { Queue } from "./index";

describe.skip("stack test suit", () => {
  let suit: Queue;
  beforeEach(() => {
    suit = new Queue(1);
  });
  it("should add values on teh Queue", () => {
    suit.enqueue(2);
    suit.enqueue(3);
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
  it("should add values on teh Queue", () => {
    suit.enqueue(2);
    suit.enqueue(3);
    suit.enqueue(4);
    suit.dequeue();
    // console.log(JSON.stringify(suit.printValue, null, 2));
    expect(suit.printValue).toEqual([
      {
        value: 2,
        prev: 1,
        next: 3,
      },
      {
        value: 3,
        prev: 2,
        next: 4,
      },
      {
        value: 4,
        prev: 3,
        next: null,
      },
    ]);
  });
  it("should add values on teh Queue", () => {
    suit.enqueue(2);
    suit.enqueue(3);
    suit.enqueue(4);
    expect(suit.peek()).toEqual({
      value: 1,
      prev: null,
      next: 2,
    });
  });
});
