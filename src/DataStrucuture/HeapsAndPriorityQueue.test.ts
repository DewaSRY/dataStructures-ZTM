import { it, describe, beforeEach, expect } from "vitest";
import { Heaps, PriorityQueue, MaxBinaryHeap } from "./HeapsAndPriorityQueue";

describe("Heaps", () => {
  let suit: Heaps;

  describe("max heap test", () => {
    beforeEach(() => {
      suit = new Heaps();
    });
    it.each([{ arr: [9, 8, 7, 6, 5, 4, 3, 2, 1] }])(
      "insert the $arr by order max first",
      ({ arr }) => {
        suit.insertMuch(arr);
        arr.forEach((num) => expect(suit.extractValue()).toBe(num));
      }
    );
  });
  describe("min heap test", () => {
    beforeEach(() => {
      suit = new Heaps((a, b) => a < b);
    });
    it.each([{ arr: [1, 2, 3, 4, 5, 6, 7, 8, 9] }])(
      "insert the $arr by order min first  first",
      ({ arr }) => {
        suit.insertMuch(arr);
        arr.forEach((num) => expect(suit.extractValue()).toBe(num));
      }
    );
  });
  describe("custom ", () => {
    let suit: PriorityQueue;
    beforeEach(() => {
      suit = new PriorityQueue();
    });
    it.each([
      {
        arr: [
          ["gunshot wound", 1],
          ["broken arm", 2],
          ["glass in foot", 3],
          ["high fever", 4],
          ["common cold", 5],
        ],
      },
    ])("insert the array", ({ arr }) => {
      arr.forEach((ces) => suit.enqueue(ces[0] as string, ces[1] as number));
      arr.forEach((ces) => {
        const actual = suit.dequeue();
        expect(actual.val).toBe(ces[0]);
        expect(actual.priority).toBe(ces[1]);
      });
    });
  });
});

describe("test", () => {
  let suit = new MaxBinaryHeap();
  it("test", () => {
    [1, 2, 3, 4, 5, 6].forEach((num) => suit.insert(num));

    console.log(suit.extractMax());
    console.log(suit.extractMax());
    // console.log(suit.extractMax());
    console.log(suit.values);
  });
});
