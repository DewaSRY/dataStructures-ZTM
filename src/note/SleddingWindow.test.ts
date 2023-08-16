import { describe, it, expect } from "vitest";
import {
  maxSubarraySum,
  maxSubarraySumTwo,
  maxSubArraySumThree,
} from "./SleddingWindow";
describe("maxSubarraySum function compare ", () => {
  let suit = maxSubArraySumThree;
  const testOne = {
    input1: [1, 2, 5, 2, 8, 1, 5],
    nVal: 2,
    output: 10,
  };
  const testTwo = {
    input1: [1, 2, 5, 2, 8, 5],
    nVal: 4,
    output: 20,
  };
  const testThree = {
    input1: [4, 2, 6],
    nVal: 1,
    output: 6,
  };
  const testFourth = {
    input1: [1, 2, 5, 2, 8, 1, 5],
    nVal: 4,
    output: 17,
  };
  const testFive = {
    input1: [4, 2, 1, 6, 2],
    nVal: 4,
    output: 13,
  };
  it.each([
    {
      inputOne: testOne.input1,
      nVal: testOne.nVal,
      output: testOne.output,
    },
    {
      inputOne: testTwo.input1,
      nVal: testTwo.nVal,
      output: testTwo.output,
    },
    {
      inputOne: testThree.input1,
      nVal: testThree.nVal,
      output: testThree.output,
    },
    {
      inputOne: testFourth.input1,
      nVal: testFourth.nVal,
      output: testFourth.output,
    },
    {
      inputOne: testFive.input1,
      nVal: testFive.nVal,
      output: testFive.output,
    },
  ])(
    "test $inputOne withe $nVal  should return $output",
    ({ inputOne, nVal, output }) => {
      expect(suit(inputOne, nVal)).toEqual(output);
    }
  );
});
describe("maxSubarraySum function compare ", () => {
  let suit = maxSubarraySum;
  const testOne = {
    input1: [1, 2, 5, 2, 8, 1, 5],
    nVal: 2,
    output: 10,
  };
  const testTwo = {
    input1: [1, 2, 5, 2, 8, 5],
    nVal: 4,
    output: 20,
  };
  const testThree = {
    input1: [4, 2, 6],
    nVal: 1,
    output: 6,
  };
  const testFourth = {
    input1: [1, 2, 5, 2, 8, 1, 5],
    nVal: 4,
    output: 17,
  };
  const testFive = {
    input1: [4, 2, 1, 6, 2],
    nVal: 4,
    output: 13,
  };
  it.each([
    {
      inputOne: testOne.input1,
      nVal: testOne.nVal,
      output: testOne.output,
    },
    {
      inputOne: testTwo.input1,
      nVal: testTwo.nVal,
      output: testTwo.output,
    },
    {
      inputOne: testThree.input1,
      nVal: testThree.nVal,
      output: testThree.output,
    },
    {
      inputOne: testFourth.input1,
      nVal: testFourth.nVal,
      output: testFourth.output,
    },
    {
      inputOne: testFive.input1,
      nVal: testFive.nVal,
      output: testFive.output,
    },
  ])(
    "test $inputOne withe $nVal  should return $output",
    ({ inputOne, nVal, output }) => {
      expect(suit(inputOne, nVal)).toEqual(output);
    }
  );
});
describe("maxSubarraySum function compare ", () => {
  let suit = maxSubarraySumTwo;
  const testOne = {
    input1: [1, 2, 5, 2, 8, 1, 5],
    nVal: 2,
    output: 10,
  };
  const testTwo = {
    input1: [1, 2, 5, 2, 8, 5],
    nVal: 4,
    output: 20,
  };
  const testThree = {
    input1: [4, 2, 6],
    nVal: 1,
    output: 6,
  };
  const testFourth = {
    input1: [1, 2, 5, 2, 8, 1, 5],
    nVal: 4,
    output: 17,
  };
  const testFive = {
    input1: [4, 2, 1, 6, 2],
    nVal: 4,
    output: 13,
  };
  it.each([
    {
      inputOne: testOne.input1,
      nVal: testOne.nVal,
      output: testOne.output,
    },
    {
      inputOne: testTwo.input1,
      nVal: testTwo.nVal,
      output: testTwo.output,
    },
    {
      inputOne: testThree.input1,
      nVal: testThree.nVal,
      output: testThree.output,
    },
    {
      inputOne: testFourth.input1,
      nVal: testFourth.nVal,
      output: testFourth.output,
    },
    {
      inputOne: testFive.input1,
      nVal: testFive.nVal,
      output: testFive.output,
    },
  ])(
    "test $inputOne withe $nVal  should return $output",
    ({ inputOne, nVal, output }) => {
      expect(suit(inputOne, nVal)).toEqual(output);
    }
  );
});
