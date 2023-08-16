import { describe, it, expect } from "vitest";
import {
  sameFrequency,
  areThereDuplicates,
  averagePair,
} from "./OptionalChalenge";
describe("averagePair function  ", () => {
  let suit = averagePair;
  const testOne = {
    arr: [1, 2, 3],
    ave: 2.5,
    output: true,
  };
  const testTwo = {
    arr: [1, 3, 3, 5, 6, 7, 10, 12, 19],
    ave: 8,
    output: true,
  };
  const testThree = {
    arr: [-1, 0, 3, 4, 5, 6],
    ave: 4.1,
    output: false,
  };

  it.each([
    {
      arr: testOne.arr,
      ave: testOne.ave,
      output: testOne.output,
    },
    {
      arr: testTwo.arr,
      ave: testTwo.ave,
      output: testTwo.output,
    },
    {
      arr: testThree.arr,
      ave: testThree.ave,
      output: testThree.output,
    },
  ])("test $arr and $ave should return $output", ({ arr, ave, output }) => {
    expect(suit(arr, ave)).toEqual(output);
  });
});
describe("maxSubarraySum function compare ", () => {
  let suit = sameFrequency;
  const testOne = {
    numOne: 182,
    numTwo: 281,
    output: true,
  };
  const testTwo = {
    numOne: 34,
    numTwo: 14,
    output: false,
  };
  const testThree = {
    numOne: 22,
    numTwo: 222,
    output: false,
  };

  it.each([
    {
      numOne: testOne.numOne,
      numTwo: testOne.numTwo,
      output: testOne.output,
    },
    {
      numOne: testTwo.numOne,
      numTwo: testTwo.numTwo,
      output: testTwo.output,
    },
    {
      numOne: testThree.numOne,
      numTwo: testThree.numTwo,
      output: testThree.output,
    },
  ])(
    "test $numOne and $numTwo should return $output",
    ({ numOne, numTwo, output }) => {
      expect(suit(numOne, numTwo)).toEqual(output);
    }
  );
});
describe("maxSubarraySum function compare ", () => {
  let suit = areThereDuplicates;
  it("should first test", () => {
    expect(suit(1, 2, 3, 4, 1)).toBe(true);
  });
  it("should second test", () => {
    expect(suit(1, 2, 3, 4)).toBe(false);
  });
  it("should there test", () => {
    expect(suit("abcdea")).toBe(true);
  });
  it("should fourth test", () => {
    expect(suit("a", "b", "c", "d,", "e", "a")).toBe(true);
  });
});
