import { describe, it, expect, beforeEach } from "vitest";
import { Graph } from "./index";

describe.skip("Graphs test suit", () => {
  let suit: Graph;
  beforeEach(() => {
    suit = new Graph();
  });
  it("first test the graphs", () => {
    suit.addVertex(0);
    suit.addVertex(1);
    suit.addVertex(2);
    suit.addVertex(3);
    suit.addVertex(4);
    suit.addVertex(5);
    suit.addVertex(6);
    suit.addEdge(3, 1);
    suit.addEdge(3, 4);
    suit.addEdge(4, 2);
    suit.addEdge(4, 5);
    suit.addEdge(1, 2);
    suit.addEdge(1, 0);
    suit.addEdge(0, 2);
    suit.addEdge(6, 5);
    suit.showConnections();
    // const actual = JSON.stringify(suit.adjacentList[2], null, 2);
    // console.log(actual);
    expect(suit.adjacentList[0]).toHaveLength(2);
    expect(suit.adjacentList[1]).toHaveLength(3);
    expect(suit.adjacentList[2]).toHaveLength(3);
    expect(suit.adjacentList[3]).toHaveLength(2);
    expect(suit.adjacentList[4]).toHaveLength(3);
    expect(suit.adjacentList[5]).toHaveLength(2);
    expect(suit.adjacentList[6]).toHaveLength(1);
  });
});
