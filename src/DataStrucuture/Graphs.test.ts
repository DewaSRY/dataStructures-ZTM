import { describe, it, expect, beforeEach } from "vitest";
import { Graph, WeightedGraph } from "./Graphs";
describe.skip("Graph ", () => {
  let suit: Graph;
  beforeEach(() => {
    suit = new Graph();
  });
  describe("add vertex should add new vertex", () => {
    it.each([
      { input: "banana" },
      { input: "apple" },
      { input: "mango" },
      { input: "pir" },
      { input: "mellon" },
    ])("$input should get store", ({ input }) => {
      suit.addVertex(input);
      expect(suit.adjecencylist[input]).toBeDefined();
    });
  });
  describe("add edge should add connection among vortex", () => {
    beforeEach(() => {
      suit
        .addVertex("banana")
        .addVertex("apple")
        .addVertex("pir")
        .addVertex("mellon")
        .addVertex("mango")
        .addVertex("avocado");
    });
    it.each([
      { domain: "banana", range: "apple" },
      { domain: "apple", range: "banana" },
      { domain: "mango", range: "avocado" },
      { domain: "avocado", range: "mango" },
      { domain: "pir", range: "mellon" },
      { domain: "mellon", range: "pir" },
    ])("$domain should add connection with $range", ({ domain, range }) => {
      suit.addEdge(domain, range);
      expect(suit.adjecencylist[domain]).toEqual([range]);
    });
  });
  describe("remove test", () => {
    beforeEach(() => {
      suit
        .addVertex("banana")
        .addVertex("apple")
        .addVertex("pir")
        .addVertex("mellon")
        .addVertex("mango")
        .addVertex("avocado")
        .addEdge("banana", "apple")
        .addEdge("banana", "pir")
        .addEdge("banana", "mellon")
        .addEdge("banana", "mango")
        .addEdge("banana", "avocado");
    });
    it("remove test", () => {
      suit.removeVertex("banana");
      expect(suit.adjecencylist["apple"]).toEqual([]);
      expect(suit.adjecencylist["banana"]).toBeUndefined();
    });
    it.each([
      { input: "apple" },
      { input: "mango" },
      { input: "pir" },
      { input: "mellon" },
      { input: "avocado" },
    ])("$input should remove banana from range", ({ input }) => {
      expect(suit.adjecencylist[input]).toEqual(["banana"]);
      suit.removeVertex("banana");
      expect(suit.adjecencylist[input]).not.toEqual(["banana"]);
    });
  });
  describe("traverse on graph", () => {
    beforeEach(() => {
      suit
        .addVertex("A")
        .addVertex("B")
        .addVertex("C")
        .addVertex("D")
        .addVertex("E")
        .addVertex("F")
        .addEdge("A", "B")
        .addEdge("A", "C")
        .addEdge("B", "D")
        .addEdge("C", "E")
        .addEdge("D", "E")
        .addEdge("D", "F")
        .addEdge("E", "F");
    });
    it("test show connection DEF", () => {
      expect(suit.graphConnection("A")).toEqual(["A", "B", "D", "E", "C", "F"]);
    });
    it("test show connection DEF iterative", () => {
      expect(suit.graphConnectionIterative("A")).toEqual([
        "A",
        "C",
        "E",
        "F",
        "D",
        "B",
      ]);
    });
    it("test show connection BEF iterative", () => {
      expect(suit.graphConnectionBFSIterative("A")).toEqual([
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ]);
    });
  });
});

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
    expect(suit.Dijkstra("A", "E")).toEqual(["A", "C", "D", "F", "E"]);
  });
});
describe("test", () => {
  var g = new WeightedGraph();
  g.addVertex("A");
  g.addVertex("Z");
  g.addVertex("C");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("H");
  g.addVertex("Q");
  g.addVertex("G");

  g.addEdge("A", "Z", 7);
  g.addEdge("A", "C", 8);

  g.addEdge("Z", "Q", 2);

  g.addEdge("C", "G", 4);

  g.addEdge("D", "Q", 8);

  g.addEdge("E", "H", 1);

  g.addEdge("H", "Q", 3);

  g.addEdge("Q", "C", 6);

  g.addEdge("G", "Q", 9);
  it("test", () => {
    console.log(g.Dijkstra("A", "E"));
  });
});
