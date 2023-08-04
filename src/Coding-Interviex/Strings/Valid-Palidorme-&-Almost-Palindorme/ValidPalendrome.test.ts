import { describe, it, expect, beforeEach } from "vitest";
import {
  isValidPalindromeFirst,
  isValidPalindromeSecond,
  isValidPalindromeThird,
} from "./index";

describe("type out two string", () => {
  let suit: typeof isValidPalindromeFirst;

  const case1 = {
    string: "A man, a plan, a canal: Panama",
    expect: true,
  };
  const case2 = {
    string: "aba",
    expect: true,
  };

  describe("first method", () => {
    beforeEach(() => {
      suit = isValidPalindromeFirst;
    });
    it.each([
      { input: case1.string, expected: case1.expect },
      { input: case2.string, expected: case2.expect },
    ])("$input should return $expected", ({ input, expected }) => {
      const actual = suit(input);
      expect(actual).toBe(expected);
    });
  });
  describe("second method", () => {
    beforeEach(() => {
      suit = isValidPalindromeSecond;
    });
    it.each([
      { input: case1.string, expected: case1.expect },
      { input: case2.string, expected: case2.expect },
    ])("$input should return $expected", ({ input, expected }) => {
      const actual = suit(input);
      expect(actual).toBe(expected);
    });
  });
  describe("third method", () => {
    beforeEach(() => {
      suit = isValidPalindromeThird;
    });
    it.each([
      { input: case1.string, expected: case1.expect },
      { input: case2.string, expected: case2.expect },
    ])("$input should return $expected", ({ input, expected }) => {
      const actual = suit(input);
      expect(actual).toBe(expected);
    });
  });
});
