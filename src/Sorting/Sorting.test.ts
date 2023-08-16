import { it, expect, describe } from "vitest";
import { bubbleSort } from "./Sort-BubbleSort";
import { selectionSort } from "./Sort-SelectingSort";
import { insertionSort } from "./Sort-InsertionSort";
// import { quickSort } from "./Sort-QuickSort";

import { mergeSort } from "./Sort-MergeSort";
describe("sorting method", () => {
  let suit: (arg: number[]) => number[];
  const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  const expectedNumb = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
  it("bubble test ", () => {
    suit = bubbleSort;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
  it("bubble test ", () => {
    suit = selectionSort;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
  it("bubble test ", () => {
    suit = mergeSort;
    expect(suit(numbers)).toEqual(expectedNumb);
  });
  it("bubble test ", () => {
    suit = insertionSort;
    expect(suit(numbers)).toEqual(expectedNumb);
  });

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
    },
  ])("expected $input get shorted to $output", ({ input, output }) => {
    const actualBubbleSort = bubbleSort(input);
    const actualInsertionSort = insertionSort(input);
    const actualSelectionsSort = selectionSort(input);
    expect(actualBubbleSort).toEqual(output);
    expect(actualInsertionSort).toEqual(output);
    expect(actualSelectionsSort).toEqual(output);
  });
});
