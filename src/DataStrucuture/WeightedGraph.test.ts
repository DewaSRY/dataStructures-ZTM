import { describe, it, expect, beforeEach } from "vitest";
import { WeightedGraph } from "./WeightedGraph";
describe.skip("WeightedGraph withe  ", () => {
  let suit: WeightedGraph;
  beforeEach(() => {
    suit = new WeightedGraph();
    suit
      .addVertex("A")
      .addVertex("B")
      .addVertex("C")
      .addVertex("D")
      .addVertex("E")
      .addVertex("F")
      .addEdge("A", "B", 4)
      .addEdge("A", "C", 2)
      .addEdge("B", "E", 3)
      .addEdge("C", "D", 2)
      .addEdge("C", "F", 4)
      .addEdge("D", "E", 3)
      .addEdge("D", "F", 1)
      .addEdge("E", "F", 1);
  });
  it(" first test Dijkstra", () => {
    expect(suit.Dijkstra("A", "E")).toMatchInlineSnapshot(`
      [
        "(A})->",
        "C",
        "D",
        "F",
        "E",
      ]
    `);
  });
});
