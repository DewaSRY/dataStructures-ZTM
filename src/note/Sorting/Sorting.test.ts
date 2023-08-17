import { it, describe, expect } from "vitest";
import { bubbleSort } from "./bubbleSrot";
import { SelectionSort, SelectionSortSecond } from "./SelectionSort";
import {
  InsertionSort,
  InsertionSortSecond,
  InsertionSortThree,
} from "./InsertionShorting";
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
  it("testing sorted test ", () => {
    suit = InsertionSortSecond;
    expect(suit(numbersTest)).toMatchInlineSnapshot(`
      [
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
        1,
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
        3,
      ]
    `);
  });
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
    numbers: [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
    expectedNumb: [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283],
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
  ])("$method willShort teh array", ({ method, input, output }) => {
    expect(method(input)).toEqual(output);
  });
});
