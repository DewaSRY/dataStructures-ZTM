import { it, describe, expect } from "vitest";
import { factorial, collectOddsNum, collectOddValues } from "./Recursion";
import {
  power,
  productOfArray,
  recursiveRange,
  fib,
  reverse,
} from "./Recursion";
describe.skip("recursive ", () => {
  it("factorial", () => {
    expect(factorial(10)).toMatchInlineSnapshot("3628800");
    expect(factorial(5)).toMatchInlineSnapshot("120");
    expect(factorial(0)).toMatchInlineSnapshot("1");
  });
  it("collectOddsNum", () => {
    expect(collectOddsNum([1, 2, 3, 4, 5, 6, 7, 8, 9])).toMatchInlineSnapshot(`
      [
        1,
      ]
    `);
  });
  it("collectOddsNum", () => {
    expect(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))
      .toMatchInlineSnapshot(`
      [
        1,
        3,
        5,
        7,
        9,
      ]
    `);
  });
  it("power", () => {
    expect(power(2, 5)).toMatchInlineSnapshot("32");
  });
  it("productOfArray", () => {
    expect(productOfArray([1, 2, 3])).toMatchInlineSnapshot("6");
    expect(productOfArray([1, 2, 3, 10])).toMatchInlineSnapshot("60");
  });
  it("recursiveRange", () => {
    expect(recursiveRange(6)).toBe(21);
  });
  it("fibonacci", () => {
    expect(fib(4)).toBe(3);
  });
  it("reverse", () => {
    expect(reverse("dewa")).toMatchInlineSnapshot('"awed"');
  });
});
