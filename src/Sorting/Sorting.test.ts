import { it, describe, expect, beforeEach } from "vitest";
import { bubbleSort, InsertionSor, SelectionSort } from "./Sorting.n^2";
import { MargeSortThird, quickSort, RadixSort } from "./Shorting.NLogN";
describe("sorting algorithms ", () => {
  describe("n^2 algorithms", () => {
    let arr = [5, 6, 4, 1, 2, 3];
    beforeEach(() => {
      arr = [5, 6, 4, 1, 2, 3];
    });
    it.each([
      { algorithms: bubbleSort },
      { algorithms: InsertionSor },
      { algorithms: SelectionSort },
    ])("$algorithms should short the array", ({ algorithms }) => {
      expect(algorithms(arr)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
  describe("N Log N algorithms", () => {
    let arr = [5, 6, 4, 1, 2, 3];
    beforeEach(() => {
      arr = [5, 6, 4, 1, 2, 3];
    });
    it.each([
      { algorithms: quickSort },
      { algorithms: RadixSort },
      { algorithms: MargeSortThird },
    ])("$algorithms should short the array", ({ algorithms }) => {
      expect(algorithms(arr)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
