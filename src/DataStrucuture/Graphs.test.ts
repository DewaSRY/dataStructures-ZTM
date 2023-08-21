import { describe, it, expect, beforeEach } from "vitest";
import { Graph } from "./Graphs";
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
      console.log("apple", suit.adjecencylist["apple"]);
      console.log("banana", suit.adjecencylist["banana"]);
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
  describe("Dept first search graph", () => {
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
      expect(suit.graphConnection("A")).toMatchInlineSnapshot(`
        [
          "(A)->",
          "(B)->",
          "(D)->",
          "(E)->",
          "(C)->",
          "(F)->",
        ]
      `);
    });
    it("test show connection DEF iterative", () => {
      expect(suit.graphConnectionIterative("A")).toMatchInlineSnapshot(`
        [
          "(A)->",
          "(C)->",
          "(E)->",
          "(F)->",
          "(D)->",
          "(B)->",
        ]
      `);
    });
    it("test show connection BEF iterative", () => {
      expect(suit.graphConnectionBFSIterative("A")).toMatchInlineSnapshot(`
        [
          "(A)->",
          "(B)->",
          "(C)->",
          "(D)->",
          "(E)->",
          "(F)->",
        ]
      `);
    });
  });
});
