import { describe, it, expect, beforeEach } from "vitest";
import {
  lengthOfLongestSubstring,
  lengthOfLongestSubstringSecond,
} from "./index";

describe.skip("type out two string", () => {
  let suit: typeof lengthOfLongestSubstring;
  const case1 = {
    S1: "abccabb",
    expect: 3,
  };
  describe("first method", () => {
    beforeEach(() => {
      suit = lengthOfLongestSubstring;
    });
    it.each([{ input1: case1.S1, expected: case1.expect }])(
      "$input1 and $input2 should return $expected",
      ({ input1, expected }) => {
        const actual = suit(input1);
        expect(actual).toBe(expected);
      }
    );
  });
  describe("first method", () => {
    beforeEach(() => {
      suit = lengthOfLongestSubstringSecond;
    });
    it.each([{ input1: case1.S1, expected: case1.expect }])(
      "$input1 and $input2 should return $expected",
      ({ input1, expected }) => {
        const actual = suit(input1);
        expect(actual).toBe(expected);
      }
    );
  });
});
