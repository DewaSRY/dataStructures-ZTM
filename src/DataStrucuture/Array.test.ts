import { describe, it, expect, beforeEach } from "vitest";
import { Array } from "./Array";
describe.skip("array test suit", () => {
  let suit: Array<number>;
  beforeEach(() => {
    suit = new Array<number>();
  });
  describe("push should add value", () => {
    it.each([
      {
        arr: [1],
        length: 1,
      },
      {
        arr: [1, 2, 3],
        length: 3,
      },
      {
        arr: [1, 2, 3, 4],
        length: 4,
      },
    ])("$arr should get push with length $length", ({ arr, length }) => {
      arr.forEach((num) => suit.push(num));
      expect(suit.getAll()).toEqual(arr);
      expect(suit.length).toBe(length);
    });
  });
  describe("pop should return the last value", () => {
    beforeEach(() => {
      suit.insertMuch([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it.each([
      { arr: [9], length: 8 },
      { arr: [9, 8], length: 7 },
      { arr: [9, 8, 7], length: 6 },
    ])(
      "pop $arr.length time should leaving $length length",
      ({ arr, length }) => {
        arr.forEach((num) => {
          expect(suit.pop()).toBe(num);
        });
        expect(suit.length).toBe(length);
      }
    );
  });
  describe("lookUp should return value base on index", () => {
    beforeEach(() => {
      suit.insertMuch([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it.each([
      { indx: 8, val: 9 },
      { indx: 6, val: 7 },
      { indx: 3, val: 4 },
      { indx: 9, val: -1 },
      { indx: -9, val: -1 },
    ])("index $indx should return $val", ({ indx, val }) => {
      expect(suit.lookUp(indx)).toBe(val);
    });
  });
  describe("delete should delete value base on index", () => {
    beforeEach(() => {
      suit.insertMuch([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it.each([
      { indx: 8, val: 9 },
      { indx: 6, val: 7 },
      { indx: 3, val: 4 },
      { indx: 9, val: -1 },
      { indx: -9, val: -1 },
    ])("index $indx should get delete $val", ({ indx, val }) => {
      expect(suit.delete(indx)).toBe(val);
    });
  });
});
