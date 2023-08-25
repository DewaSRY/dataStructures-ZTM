import { describe, it, beforeEach } from "vitest";

import { Graph } from "./Graphs";
describe("component ", () => {
  let suit: Graph;
  beforeEach(() => {
    suit = new Graph();
  });
  it("test", () => {
    suit.insertMuch([0, 1, 2, 3, 4, 5, 6, 7, 8]).addVertexMuch([
      [0, 1],
      [0, 3],
      [3, 2],
      [3, 4],
      [3, 5],
      [2, 8],
      [4, 6],
      [6, 7],
    ]);

    console.log(suit.traversalBFS());
    console.log(suit.traverseDef());
  });
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
});
