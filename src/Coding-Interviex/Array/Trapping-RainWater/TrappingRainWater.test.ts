import { describe, it, expect, beforeEach } from "vitest";
import { getTrappedRainwater, getTrappedRainwaterSecond } from "./index";

describe("water container test suit", () => {
  let suit: typeof getTrappedRainwater;

  const firstArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
  const firstExpected = 8;
  //   const secondArray = [7, 1, 2, 9, 3];
  //   const secondExpected = 21;
  //   const thirdArray = [7];
  //   const thirdExpected = 0;
  //   const fourthArray = [] as number[];
  //   const fourthExpected = 0;
  //   const fiveArray = [4, 8, 1, 2, 3, 9];
  //   const fiveExpected = 32;
  describe("first model", () => {
    beforeEach(() => {
      suit = getTrappedRainwater;
    });
    it.each([
      { input: firstArray, out: firstExpected },
      //   { input: secondArray, out: secondExpected },
      //   { input: thirdArray, out: thirdExpected },
      //   { input: fourthArray, out: fourthExpected },
      //   { input: fiveArray, out: fiveExpected },
    ])("container $input should return $out", ({ input, out }) => {
      const actual = suit(input);
      expect(actual).toBe(out);
    });
  });
  describe("first model", () => {
    beforeEach(() => {
      suit = getTrappedRainwaterSecond;
    });
    it.each([
      { input: firstArray, out: firstExpected },
      //   { input: secondArray, out: secondExpected },
      //   { input: thirdArray, out: thirdExpected },
      //   { input: fourthArray, out: fourthExpected },
      //   { input: fiveArray, out: fiveExpected },
    ])("container $input should return $out", ({ input, out }) => {
      const actual = suit(input);
      expect(actual).toBe(out);
    });
  });
});
