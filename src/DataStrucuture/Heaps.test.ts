import { it, describe, beforeEach } from "vitest";
import { Heaps, PriorityQueue } from "./Heaps";

describe("Heaps", () => {
  let suit: Heaps;
  beforeEach(() => {
    suit = new Heaps();
  });
  it("first test ", () => {
    suit.insertMuch([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    suit.extractValue();
    suit.extractValue();
    console.log(suit.heaps);
  });
});
describe("Heaps", () => {
  let suit: PriorityQueue;
  beforeEach(() => {
    suit = new PriorityQueue();
  });
  it("first test ", () => {
    suit.insertMuch([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    suit.pop();
    suit.pop();
    console.log(suit.heap);
  });
});
