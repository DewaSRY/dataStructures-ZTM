import { describe, it, expect, beforeEach } from "vitest";
import { twoSum, twoSumSecond, twoSumThird } from "./index";

describe.skip("sum two array", () => {
  let suit: typeof twoSum;
  const firsNumbs = [1, 2, 3, 4, 5, 9];
  const firstTarget = 11;
  const firsExpect = [1, 5];
  const secondNumbs = [2, 5, 5, 11];
  const secondTarget = 10;
  const secondExpect = [1, 2];
  const thirdArray = [7];
  const thirdExpected = null;
  const thirdTarget = 10;
  const fourthArray = [] as number[];
  const fourthExpected = null;
  const fourthTarget = 10;
  describe("first method", () => {
    beforeEach(() => {
      suit = twoSum;
    });
    it.each([
      { input: firsNumbs, target: firstTarget, expected: firsExpect },
      { input: secondNumbs, target: secondTarget, expected: secondExpect },
      { input: thirdArray, target: thirdTarget, expected: thirdExpected },
      { input: fourthArray, target: fourthTarget, expected: fourthExpected },
    ])(
      "$input should get two sum on index $expected",
      ({ input, target, expected }) => {
        const actual = suit(input, target);
        expect(actual).toEqual(expected);
      }
    );
  });
  describe("second method", () => {
    beforeEach(() => {
      suit = twoSumSecond;
    });
    it.each([
      { input: firsNumbs, target: firstTarget, expected: firsExpect },
      { input: secondNumbs, target: secondTarget, expected: secondExpect },
      { input: thirdArray, target: thirdTarget, expected: thirdExpected },
      { input: fourthArray, target: fourthTarget, expected: fourthExpected },
    ])(
      "$input should get two sum on index $expected",
      ({ input, target, expected }) => {
        const actual = suit(input, target);
        expect(actual).toEqual(expected);
      }
    );
  });
  describe("second method", () => {
    beforeEach(() => {
      suit = twoSumThird;
    });
    it.each([
      { input: firsNumbs, target: firstTarget, expected: firsExpect },
      { input: secondNumbs, target: secondTarget, expected: secondExpect },
      { input: thirdArray, target: thirdTarget, expected: thirdExpected },
      { input: fourthArray, target: fourthTarget, expected: fourthExpected },
    ])(
      "$input should get two sum on index $expected",
      ({ input, target, expected }) => {
        const actual = suit(input, target);
        expect(actual).toEqual(expected);
      }
    );
  });
});
