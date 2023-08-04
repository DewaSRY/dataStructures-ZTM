import { describe, it, expect, beforeEach } from "vitest";
import { validPalindrome } from "./AlmosePalendrome";

describe("type out two string", () => {
  let suit: typeof validPalindrome;

  const case1 = {
    string: "A man, a plan, a canal: Panama",
    expect: true,
  };
  const case2 = {
    string: "aba",
    expect: true,
  };
  const case3 = {
    string: "abaa",
    expect: true,
  };

  describe("first method", () => {
    beforeEach(() => {
      suit = validPalindrome;
    });
    it.each([
      { input: case1.string, expected: case1.expect },
      { input: case2.string, expected: case2.expect },
      { input: case3.string, expected: case3.expect },
    ])("$input should return $expected", ({ input, expected }) => {
      const actual = suit(input);
      expect(actual).toBe(expected);
    });
  });
});
