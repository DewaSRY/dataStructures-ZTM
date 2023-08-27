import { describe, it, expect, beforeEach } from "vitest";
import { Queue } from "./Queue";

describe("stack test suit", () => {
  let suit: Queue;
  beforeEach(() => {
    suit = new Queue();
  });
  describe("enqueue use to insert data to the queue", () => {
    it.each([{ arr: [1, 2, 3, 4, 5] }])(
      "$arr first data in and first data out",
      ({ arr }) => {
        arr.forEach((val) => {
          suit.enqueue(val);
        });
        expect(suit.printValue).toEqual(arr);
        arr.forEach((val) => {
          expect(suit.peek()).toBe(val);
          expect(suit.dequeue()).toBe(val);
        });
      }
    );
  });
});
