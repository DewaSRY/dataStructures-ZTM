import { describe, it, expect } from "vitest";
import { cartCount, same, sameTwo, isAnagram, isAnagramTwo } from "./Example";
describe("cart count will cunt the the num of every chat of the string  ", () => {
  let suit = cartCount;
  it("should have some property ", () => {
    const actual = suit("hallo how are you today AAA");
    expect(actual).toMatchInlineSnapshot(`{
        "a": 6,
        "d": 1,
        "e": 1,
        "h": 2,
        "l": 2,
        "o": 4,
        "r": 1,
        "t": 1,
        "u": 1,
        "w": 1,
        "y": 2,
      }
    `);
  });
});
describe("same function to compare two array withe same Two", () => {
  let suit = sameTwo;
  const testOne = {
    input1: [1, 2, 3],
    input2: [4, 1, 9],
    output: true,
  };
  const testTwo = {
    input1: [1, 2, 3],
    input2: [1, 9],
    output: false,
  };
  const testThree = {
    input1: [1, 2, 1],
    input2: [1, 4, 4],
    output: false,
  };
  it.each([
    {
      inputOne: testOne.input1,
      inputTwo: testOne.input2,
      output: testOne.output,
    },
    {
      inputOne: testTwo.input1,
      inputTwo: testTwo.input2,
      output: testTwo.output,
    },
    {
      inputOne: testThree.input1,
      inputTwo: testThree.input2,
      output: testThree.output,
    },
  ])(
    "test $inputOne and $inputTwo should return $output",
    ({ inputOne, inputTwo, output }) => {
      expect(suit(inputOne, inputTwo)).toBe(output);
    }
  );
});
describe("same function to compare two array with same One ", () => {
  let suit = same;
  const testOne = {
    input1: [1, 2, 3],
    input2: [4, 1, 9],
    output: true,
  };
  const testTwo = {
    input1: [1, 2, 3],
    input2: [1, 9],
    output: false,
  };
  const testThree = {
    input1: [1, 2, 1],
    input2: [1, 4, 4],
    output: false,
  };
  it.each([
    {
      inputOne: testOne.input1,
      inputTwo: testOne.input2,
      output: testOne.output,
    },
    {
      inputOne: testTwo.input1,
      inputTwo: testTwo.input2,
      output: testTwo.output,
    },
    {
      inputOne: testThree.input1,
      inputTwo: testThree.input2,
      output: testThree.output,
    },
  ])(
    "test $inputOne and $inputTwo should return $output",
    ({ inputOne, inputTwo, output }) => {
      expect(suit(inputOne, inputTwo)).toBe(output);
    }
  );
});
describe("isAnagram function to compare two string ", () => {
  let suit = isAnagram;
  const testOne = {
    input1: "",
    input2: "",
    output: true,
  };
  const testTwo = {
    input1: "aaz",
    input2: "zza",
    output: false,
  };
  const testThree = {
    input1: "rat",
    input2: "car",
    output: false,
  };
  it.each([
    {
      inputOne: testOne.input1,
      inputTwo: testOne.input2,
      output: testOne.output,
    },
    {
      inputOne: testTwo.input1,
      inputTwo: testTwo.input2,
      output: testTwo.output,
    },
    {
      inputOne: testThree.input1,
      inputTwo: testThree.input2,
      output: testThree.output,
    },
  ])(
    "test $inputOne and $inputTwo should return $output",
    ({ inputOne, inputTwo, output }) => {
      expect(suit(inputOne, inputTwo)).toBe(output);
    }
  );
});
describe("isAnagramTwo function to compare two string ", () => {
  let suit = isAnagramTwo;
  const testOne = {
    input1: "",
    input2: "",
    output: true,
  };
  const testTwo = {
    input1: "aaz",
    input2: "zza",
    output: false,
  };
  const testThree = {
    input1: "rat",
    input2: "car",
    output: false,
  };
  it.each([
    {
      inputOne: testOne.input1,
      inputTwo: testOne.input2,
      output: testOne.output,
    },
    {
      inputOne: testTwo.input1,
      inputTwo: testTwo.input2,
      output: testTwo.output,
    },
    {
      inputOne: testThree.input1,
      inputTwo: testThree.input2,
      output: testThree.output,
    },
  ])(
    "test $inputOne and $inputTwo should return $output",
    ({ inputOne, inputTwo, output }) => {
      expect(suit(inputOne, inputTwo)).toBe(output);
    }
  );
});
