import { describe, it, expect } from "vitest";
import { TwoSumNum, WaterContainer, TrappingRainWater } from "./Array";
describe("Array Question ", () => {
  describe("two sum to get the target ", () => {
    let suit = TwoSumNum;
    it.each([
      {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        target: 5,
        expected: [1, 2],
      },
      {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        target: 9,
        expected: [3, 4],
      },
      {
        array: [2, 7, 11, 15],
        target: 9,
        expected: [0, 1],
      },
      {
        array: [3, 2, 4],
        target: 6,
        expected: [1, 2],
      },
    ])("$target should return $expected", ({ array, target, expected }) => {
      expect(suit(array, target)).toEqual(expected);
    });
  });
  describe("most water container ", () => {
    let suit = WaterContainer;
    it.each([
      {
        array: [1, 8, 6, 2, 9, 4],
        expected: 32,
      },
      {
        array: [1, 1],
        expected: 1,
      },
      {
        array: [1, 8, 6, 2, 5, 4, 8, 3, 7],
        expected: 49,
      },
      {
        array: [1, 2],
        expected: 1,
      },
    ])("$array should return $expected", ({ array, expected }) => {
      expect(suit(array)).toEqual(expected);
    });
  });
  describe("trapping rain water ", () => {
    let suit = TrappingRainWater;
    it.each([
      {
        array: [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2],
        expected: 8,
      },
      {
        array: [0, 1, 0],
        expected: 0,
      },
      {
        array: [0, 1],
        expected: 0,
      },
    ])("$array should return $expected", ({ array, expected }) => {
      expect(suit(array)).toEqual(expected);
    });
  });

  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
});
