import { describe, it, expect } from "vitest";
import {
  TypedOutString,
  LongesSubString,
  validPalindrome,
  almostPalindrome,
} from "./Strings";
describe("Strings question ", () => {
  describe("Typed Out String", () => {
    let suit = TypedOutString;
    it.each([
      {
        strOne: "ab#c",
        strTwo: "aZ#c",
        output: true,
      },
      {
        strOne: "abb##c",
        strTwo: "ac",
        output: true,
      },
      {
        strOne: "abb#c",
        strTwo: "abc",
        output: true,
      },
      {
        strOne: "a#c",
        strTwo: "b",
        output: false,
      },
    ])(
      "$strOne and $strTwo should return $output",
      ({ strOne, strTwo, output }) => {
        expect(suit(strOne, strTwo)).toBe(output);
      }
    );
  });
  describe("validate palindrome", () => {
    let suit = validPalindrome;
    it.each([
      {
        strOne: "abccba",
        output: true,
      },
      {
        strOne: "c",
        output: true,
      },
      {
        strOne: "",
        output: true,
      },
      {
        strOne: "hallo",
        output: false,
      },
    ])("$strOne should return $output", ({ strOne, output }) => {
      expect(suit(strOne)).toBe(output);
    });
  });
  describe("validate palindrome", () => {
    let suit = almostPalindrome;
    it.each([
      {
        strOne: "abcdcba",
        output: true,
      },
      {
        strOne: "acba",
        output: true,
      },
      {
        strOne: "aaba",
        output: true,
      },
      {
        strOne: "hallo",
        output: false,
      },
    ])("$strOne should return $output", ({ strOne, output }) => {
      expect(suit(strOne)).toBe(output);
    });
  });
  describe("Typed Out String", () => {
    let suit = LongesSubString;
    it.each([
      {
        strOne: "abccabb",
        output: 3,
      },
      {
        strOne: "ccccccc",
        output: 1,
      },
      {
        strOne: "abcabcbb",
        output: 3,
      },
      {
        strOne: "pwwkew",
        output: 3,
      },
    ])("$strOne and return $output", ({ strOne, output }) => {
      expect(suit(strOne)).toBe(output);
    });
  });
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
});
