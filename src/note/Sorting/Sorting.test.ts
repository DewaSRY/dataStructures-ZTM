import { it, describe, expect } from "vitest";
import { bubbleSort } from "./bubbleSrot";
import { SelectionSort, SelectionSortSecond } from "./SelectionSort";
import {
  InsertionSort,
  InsertionSortSecond,
  InsertionSortThree,
} from "./InsertionShorting";
import { MargeSort, MargeSortSecond } from "./MargeSort";
describe("sorting method", () => {
  let suit: (arg: number[]) => number[];
  const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  const expectedNumb = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
  const numbersTest = [
    0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3,
  ];
  it("bubbleSort test ", () => {
    suit = bubbleSort;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
  it("SelectionSort test ", () => {
    suit = SelectionSort;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
  it("SelectionSortSecond test ", () => {
    suit = SelectionSortSecond;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
  it("InsertionSort test ", () => {
    suit = InsertionSort;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
  it("InsertionSortSecond test ", () => {
    suit = InsertionSortSecond;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
  it("InsertionSortThree test ", () => {
    suit = InsertionSortThree;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
  it("MargeSort test ", () => {
    suit = MargeSort;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
  it("testing sorted test ", () => {
    suit = MargeSortSecond;
    expect(suit(numbersTest)).toMatchInlineSnapshot(`
      [
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
      ]
    `);
  });
  // it("mergeSort test ", () => {
  //   suit = mergeSort;
  //   expect(suit(numbers)).toEqual(expectedNumb);
  // });
  // it("mergeSort test ", () => {
  //   suit = mergeSort;
  //   expect(suit(numbers)).toEqual(expectedNumb);
  // });
  // it("insertionSort test ", () => {
  //   suit = insertionSort;
  //   expect(suit(numbers)).toEqual(expectedNumb);
  // });
  // it("bubble test ", () => {
  //   const actual = quickSort;
  //   expect(actual(numbers)).toEqual(expectedNumb);
  // });
});
describe("testing sorting method", () => {
  const testOne = {
    numbers: [
      444, 555, 44, 6, 2, 666, 1, 5, 63, 87, 283, 4, 99, 0, 777, 888, 999, 333,
    ],
    expectedNumb: [
      0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283, 333, 444, 555, 666, 777, 888, 999,
    ],
  };

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
  ])("$method willShort teh array", ({ method, input, output }) => {
    expect(method(input)).toEqual(output);
  });
});
