import { it, describe, expect, afterEach } from "vitest";
import { bubbleSort } from "./BubbleSort";
import {
  SelectionSort,
  SelectionSortSecond,
  SelectionSortThird,
} from "./SelectionSort";
import {
  InsertionSort,
  InsertionSortSecond,
  InsertionSortThree,
} from "./InsertionShorting";
import { MargeSort, MargeSortSecond } from "./MargeSort";
import { quickSort, quickSortSecond } from "./QuickSort";
import { RadixSort } from "./RadixSort";
// import { BogoSort } from "./BogoSort";
describe.skip("sorting method", () => {
  let suit: (arg: number[]) => number[];
  let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  const expectedNumb = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
  afterEach(() => {
    numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  });
  it("bubbleSort test ", () => {
    suit = bubbleSort;
    expect(suit(numbers)).toEqual(expectedNumb);
  });

  it("InsertionSortSecond test ", () => {
    suit = InsertionSortSecond;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
  it("quickSort test ", () => {
    suit = quickSort;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
  it("quickSortSecond test ", () => {
    suit = quickSortSecond;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
  it("RadixSort test ", () => {
    suit = RadixSort;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
});
interface NumberToShort {
  numbers: number[];
  expectedNumb: number[];
}
describe.skip("testing sorting method", () => {
  let testOne: NumberToShort = {
    numbers: [
      444, 555, 44, 6, 2, 666, 1, 5, 63, 87, 283, 4, 99, 0, 777, 888, 999, 333,
    ],
    expectedNumb: [
      0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283, 333, 444, 555, 666, 777, 888, 999,
    ],
  };
  afterEach(() => {
    testOne = {
      numbers: [
        444, 555, 44, 6, 2, 666, 1, 5, 63, 87, 283, 4, 99, 0, 777, 888, 999,
        333,
      ],
      expectedNumb: [
        0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283, 333, 444, 555, 666, 777, 888,
        999,
      ],
    };
  });
  it.each([
    {
      input: testOne.numbers,
      output: testOne.expectedNumb,
      method: bubbleSort,
    },
    {
      input: testOne.numbers,
      output: testOne.expectedNumb,
      method: SelectionSort,
    },
    {
      input: testOne.numbers,
      output: testOne.expectedNumb,
      method: SelectionSortSecond,
    },
    {
      input: testOne.numbers,
      output: testOne.expectedNumb,
      method: SelectionSortThird,
    },
    {
      input: testOne.numbers,
      output: testOne.expectedNumb,
      method: InsertionSort,
    },
    {
      input: testOne.numbers,
      output: testOne.expectedNumb,
      method: InsertionSortSecond,
    },
    {
      input: testOne.numbers,
      output: testOne.expectedNumb,
      method: InsertionSortThree,
    },
    {
      input: testOne.numbers,
      output: testOne.expectedNumb,
      method: MargeSort,
    },
    {
      input: testOne.numbers,
      output: testOne.expectedNumb,
      method: MargeSortSecond,
    },

    {
      input: testOne.numbers,
      output: testOne.expectedNumb,
      method: quickSort,
    },
    {
      input: testOne.numbers,
      output: testOne.expectedNumb,
      method: quickSortSecond,
    },
    {
      input: testOne.numbers,
      output: testOne.expectedNumb,
      method: RadixSort,
    },
  ])("$method willShort teh array", ({ method, input, output }) => {
    expect(method(input)).toEqual(output);
  });
});
