import { it, describe, beforeEach } from "vitest";
import { MaxBinaryHeep } from "./Heaps";

describe.skip("MaxBinaryHeep", () => {
  let suit: MaxBinaryHeep;
  beforeEach(() => {
    suit = new MaxBinaryHeep(100);
  });
  it("first test ", () => {
    suit.insert(70);
    console.log(suit.value);
  });
});
