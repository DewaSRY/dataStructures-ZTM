import { describe, it, expect } from "vitest";
import { search } from "./DivideAndConquer";
describe.skip("sumZero function compare ", () => {
  let suit = search;
  const testOne = {
    input1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    valNum: 7,
    output: 6,
  };
  const testTwo = {
    input1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    valNum: 8,
    output: 7,
  };
  const testThree = {
    input1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    valNum: 17,
    output: -1,
  };
  it.each([
    {
      Arr: testOne.input1,
      valNum: testOne.valNum,
      output: testOne.output,
    },
    {
      Arr: testTwo.input1,
      valNum: testTwo.valNum,
      output: testTwo.output,
    },
    {
      Arr: testThree.input1,
      valNum: testThree.valNum,
      output: testThree.output,
    },
  ])("test $inputOne and  should return $output", ({ Arr, valNum, output }) => {
    expect(suit(Arr, valNum)).toEqual(output);
  });
});
