import { it, describe, expect } from "vitest";
import { factorial } from ".";
describe("recursive ", () => {
  it("factorial", () => {
    expect(factorial(10)).toMatchInlineSnapshot("3628800");
    expect(factorial(5)).toMatchInlineSnapshot('120');
    expect(factorial(0)).toMatchInlineSnapshot('1');
  });
});
