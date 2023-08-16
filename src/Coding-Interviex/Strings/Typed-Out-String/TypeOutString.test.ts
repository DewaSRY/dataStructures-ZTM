import { describe, it, expect, beforeEach } from "vitest";
import {
  backspaceCompare,
  backspaceCompareSecond,
  backspaceCompareThree,
} from "./index";

describe.skip("type out two string", () => {
  let suit: typeof backspaceCompare;
  const case1 = {
    S1: "az#z",
    S2: "az#z",
    expect: true,
  };
  const case2 = {
    S1: "abc#d",
    S2: "abzz##d",
    expect: true,
  };

  describe("first method", () => {
    beforeEach(() => {
      suit = backspaceCompare;
    });
    it.each([
      { input1: case1.S1, input2: case1.S2, expected: case1.expect },
      { input1: case2.S1, input2: case2.S2, expected: case2.expect },
    ])(
      "$input1 and $input2 should return $expected",
      ({ input1, input2, expected }) => {
        const actual = suit(input1, input2);
        expect(actual).toBe(expected);
      }
    );
  });
  describe("three method", () => {
    beforeEach(() => {
      suit = backspaceCompareThree;
    });
    it.each([
      { input1: case1.S1, input2: case1.S2, expected: case1.expect },
      { input1: case2.S1, input2: case2.S2, expected: case2.expect },
    ])(
      "$input1 and $input2 should return $expected",
      ({ input1, input2, expected }) => {
        const actual = suit(input1, input2);
        expect(actual).toBe(expected);
      }
    );
  });
  describe("second method", () => {
    beforeEach(() => {
      suit = backspaceCompareSecond;
    });
    it.each([
      { input1: case1.S1, input2: case1.S2, expected: case1.expect },
      { input1: case2.S1, input2: case2.S2, expected: case2.expect },
    ])(
      "$input1 and $input2 should return $expected",
      ({ input1, input2, expected }) => {
        const actual = suit(input1, input2);
        expect(actual).toBe(expected);
      }
    );
  });
});
