import { describe, it, expect } from "vitest";
import {
  sumZero,
  countUniqueValues,
  countUniqueValuesTwo,
} from "./MultiplePointer";
describe.skip("sumZero function compare ", () => {
  let suit = sumZero;
  const testOne = {
    input1: [1, 2, 3, -1, 4, 6],
    output: [1, -1],
  };
  const testTwo = {
    input1: [1, 2, 3, 4, 5, 6],
    output: false,
  };
  const testThree = {
    input1: [1, 2, 1, 2, 4, 5, 7],
    output: false,
  };
  it.each([
    {
      inputOne: testOne.input1,
      output: testOne.output,
    },
    {
      inputOne: testTwo.input1,
      output: testTwo.output,
    },
    {
      inputOne: testThree.input1,
      output: testThree.output,
    },
  ])("test $inputOne and  should return $output", ({ inputOne, output }) => {
    expect(suit(inputOne)).toEqual(output);
  });
});
describe.skip("Count unique values function ", () => {
  let suit = countUniqueValuesTwo;

  it.each([
    {
      inputOne: [1, 2, 1, 1, 1, 1, 2],
      output: 2,
    },
    {
      inputOne: [
        1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 7, 7, 7, 7, 7, 7, 12, 12, 12, 13,
      ],
      output: 7,
    },
    {
      inputOne: [],
      output: 0,
    },
    {
      inputOne: [-2, -1, -1, 0, 1],
      output: 4,
    },
  ])("test $inputOne and  should return $output", ({ inputOne, output }) => {
    expect(suit(inputOne)).toEqual(output);
  });
});

describe.skip("Count unique values function ", () => {
  let suit = countUniqueValues;
  it.each([
    {
      inputOne: [1, 2, 1, 1, 1, 1, 2],
      output: 2,
    },
    {
      inputOne: [
        1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 7, 7, 7, 7, 7, 7, 12, 12, 12, 13,
      ],
      output: 7,
    },
    {
      inputOne: [],
      output: 0,
    },
    {
      inputOne: [-2, -1, -1, 0, 1],
      output: 4,
    },
  ])("test $inputOne and  should return $output", ({ inputOne, output }) => {
    expect(suit(inputOne)).toEqual(output);
  });
});
