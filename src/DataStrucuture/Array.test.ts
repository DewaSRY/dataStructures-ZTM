import { describe, it, expect, beforeEach } from "vitest";
import { Array } from "./Array";
describe.skip("array test suit", () => {
  let suit: Array<number>;
  beforeEach(() => {
    suit = new Array<number>([1, 2, 3, 4, 5]);
  });
  it("should add new item", () => {
    suit.push(6);
    expect(suit.length).toBe(6);
  });
  it("should pop last item", () => {
    suit.pop();
    expect(suit.length).toBe(5);
  });
  it("should return all data", () => {
    expect(suit.allData()).toEqual([1, 2, 3, 4, 5]);
  });
  it("should delete data n the index get set", () => {
    suit.delete(0);
    expect(suit.allData()).toEqual([2, 3, 4, 5]);
  });
  it("should delete data n the index get set", () => {
    expect(suit.get(1)).toBe(2);
  });
});
