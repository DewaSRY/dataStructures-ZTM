import { describe, it, beforeEach } from "vitest";
import { Matrix } from "./Matrices";
describe("component ", () => {
  let suit: Matrix;
  beforeEach(() => {
    suit = new Matrix();
  });
  it("test", () => {
    suit
      .insertRow([1, 2, 3, 4, 5])
      .insertRow([6, 7, 8, 9, 10])
      .insertRow([11, 12, 13, 14, 15])
      .insertRow([16, 17, 18, 19, 20]);
    // console.log(suit.traversal());
    console.log(suit.traversalBFS());
  });
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
});
