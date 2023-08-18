import { describe, it, expect } from "vitest";
import {
  sameFrequency,
  areThereDuplicates,
  averagePair,
  isSubsequence,
  maxSubarraySum,
  minSubArrayLen,
  findLongestSubstring,
} from "./OptionalChalenge";
describe.skip("minSubArrayLen function compare ", () => {
  let suit = findLongestSubstring;
  const testOne = {
    str: "",
    output: 0,
  };
  const testTwo = {
    str: "rithmschool",
    output: 7,
  };
  const testThree = {
    str: "thisisawesome",
    output: 6,
  };
  const testFourth = {
    str: "thecatinthehat",
    output: 7,
  };
  const testFive = {
    str: "bbbbbb",
    output: 1,
  };
  it.each([
    {
      str: testOne.str,
      output: testOne.output,
    },
    {
      str: testTwo.str,
      output: testTwo.output,
    },
    {
      str: testThree.str,
      output: testThree.output,
    },
    {
      str: testFourth.str,
      output: testFourth.output,
    },
    {
      str: testFive.str,
      output: testFive.output,
    },
  ])("test $str withe $nVal  should return $output", ({ str, output }) => {
    expect(suit(str)).toEqual(output);
  });
});
describe.skip("minSubArrayLen function compare ", () => {
  let suit = minSubArrayLen;
  const testOne = {
    input1: [2, 3, 1, 2, 4, 3],
    nVal: 7,
    output: 2,
  };
  const testTwo = {
    input1: [2, 1, 6, 5, 4],
    nVal: 9,
    output: 2,
  };
  const testThree = {
    input1: [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19],
    nVal: 52,
    output: 1,
  };
  const testFourth = {
    input1: [1, 4, 16, 22, 5, 7, 8, 9, 10],
    nVal: 55,
    output: 5,
  };
  const testFive = {
    input1: [1, 4, 16, 22, 5, 7, 8, 9, 10],
    nVal: 39,
    output: 3,
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
describe.skip("maxSubarraySum function compare ", () => {
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
describe.skip("isSubsequence function  ", () => {
  let suit = isSubsequence;
  const testOne = {
    sub: "hello",
    str: "hello world",
    output: true,
  };
  const testTwo = {
    sub: "abc",
    str: "abracadabra",
    output: true,
  };
  const testThree = {
    sub: "abc",
    str: "acb",
    output: false,
  };

  it.each([
    {
      sub: testOne.sub,
      str: testOne.str,
      output: testOne.output,
    },
    {
      sub: testTwo.sub,
      str: testTwo.str,
      output: testTwo.output,
    },
    {
      sub: testThree.sub,
      str: testThree.str,
      output: testThree.output,
    },
  ])("test $sub and $str should return $output", ({ sub, str, output }) => {
    expect(suit(sub, str)).toEqual(output);
  });
});
describe.skip("averagePair function  ", () => {
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
describe.skip("maxSubarraySum function compare ", () => {
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
describe.skip("areThereDuplicates function compare ", () => {
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
