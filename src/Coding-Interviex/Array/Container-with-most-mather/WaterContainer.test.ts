import { describe, it, expect, beforeEach } from "vitest";
import { waterContainer, secondWaterContainer } from "./index";

describe("water container test suit", () => {
  let suit: typeof waterContainer;

  const firstArray = [7, 1, 2, 3, 9];
  const firstExpected = 28;
  const secondArray = [7, 1, 2, 9, 3];
  const secondExpected = 21;
  const thirdArray = [7];
  const thirdExpected = 0;
  const fourthArray = [] as number[];
  const fourthExpected = 0;
  const fiveArray = [4, 8, 1, 2, 3, 9];
  const fiveExpected = 32;
  describe("first model", () => {
    beforeEach(() => {
      suit = waterContainer;
    });
    it.each([
      { input: firstArray, out: firstExpected },
      { input: secondArray, out: secondExpected },
      { input: thirdArray, out: thirdExpected },
      { input: fourthArray, out: fourthExpected },
      { input: fiveArray, out: fiveExpected },
    ])("container $input should return $out", ({ input, out }) => {
      const actual = suit(input);
      expect(actual).toBe(out);
    });
  });
  describe("second model", () => {
    beforeEach(() => {
      suit = secondWaterContainer;
    });
    it.each([
      { input: firstArray, out: firstExpected },
      { input: secondArray, out: secondExpected },
      { input: thirdArray, out: thirdExpected },
      { input: fourthArray, out: fourthExpected },
      { input: fiveArray, out: fiveExpected },
    ])("container $input should return $out", ({ input, out }) => {
      const actual = suit(input);
      expect(actual).toBe(out);
    });
  });
});
