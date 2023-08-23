import { describe, it, expect, beforeEach } from "vitest";
import { BinaryTree, maxDepth } from "./BinaryTrees";
describe("component ", () => {
  let suit: BinaryTree;
  beforeEach(() => {
    suit = new BinaryTree();
  });

  it("t", () => {
    suit.insertOne(4);
    suit.insertOne(3);
    suit.insertOne(5);
    expect(maxDepth(suit.root!)).toBe(2);
  });

  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
});
