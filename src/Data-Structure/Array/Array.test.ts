import { describe, it, expect, beforeEach } from "vitest";
import { Array } from "./index";
describe("array test suit", () => {
  let suit: Array<number>;
  const arrayNumber = [1, 2, 3];
  beforeEach(() => {
    suit = new Array<number>(arrayNumber);
  });
  it("should add new item", () => {
    suit.push(1);
    const arrayLength = suit.length;
    expect(arrayLength).toBe(4);
  });
  it("should pop last item", () => {
    suit.pop();
    const arrayLength = suit.length;
    expect(arrayLength).toBe(3);
  });
  it("should return all data", () => {
    const actual = suit.allData();
    expect(actual).toEqual(arrayNumber);
  });
  it("should delete data n the index get set", () => {
    suit.delete(0);
    const actual = suit.allData();
    expect(actual).toEqual([2, 3]);
  });
  it("should delete data n the index get set", () => {
    const actual = suit.get(1);
    expect(actual).toBe(2);
  });
});
