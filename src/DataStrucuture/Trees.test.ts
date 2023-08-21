import { it, describe, expect, beforeEach } from "vitest";

import {
  BinarySearchTree,
  BreadForSearch,
  BreadForSearchPrettyPrint,
  Traverse,
} from "./Trees";
describe.skip("BinarySearch suit", () => {
  let suit: BinarySearchTree;
  beforeEach(() => {
    suit = new BinarySearchTree(41);
  });
  describe("insert should add new number", () => {
    it("first insert test", () => {
      suit.insert(65);
      suit.insert(20);
      expect(suit.root?.left?.value).toBe(20);
      expect(suit.root?.right?.value).toBe(65);
    });
    it("second insert test", () => {
      suit.insert(65);
      suit.insert(20);
      suit.insert(50);
      suit.insert(91);
      expect(suit.root?.left?.value).toBe(20);
      expect(suit.root?.right?.value).toBe(65);
      expect(suit.root?.right?.left?.value).toBe(50);
      expect(suit.root?.right?.right?.value).toBe(91);
    });
  });
  describe("find should return match value ", () => {
    it("first test find", () => {
      suit.insert(65);
      suit.insert(20);
      suit.insert(50);
      suit.insert(91);
      expect(suit.find(20)?.value).toBe(20);
      expect(suit.find(65)?.value).toBe(65);
      expect(suit.find(100)).toBe(null);
    });
  });
  describe("tree search", () => {
    it("bread for Search", () => {
      suit.insert(65);
      suit.insert(20);
      suit.insert(50);
      suit.insert(91);
      expect(BreadForSearch(suit.root!)).toMatchInlineSnapshot(`
        [
          41,
          65,
          20,
          91,
          50,
        ]
      `);
      console.log(BreadForSearchPrettyPrint(suit.root!));
    });
    it("depth first Search ", () => {
      suit.insert(65);
      suit.insert(20);
      suit.insert(50);
      suit.insert(91);
      expect(Traverse(suit.root!)).toMatchInlineSnapshot(`
        [
          41,
          20,
          65,
          50,
          91,
        ]
      `);
    });
    it("DEF preOrder", () => {
      suit.insert(65);
      suit.insert(20);
      suit.insert(50);
      suit.insert(91);
      expect(suit.DFSPreOrder()).toMatchInlineSnapshot(`
        [
          41,
          20,
          65,
          50,
          91,
        ]
      `);
    });
    it("DEF preOrder", () => {
      suit.insert(65);
      suit.insert(20);
      suit.insert(50);
      suit.insert(91);
      expect(suit.DFSPostOrder()).toMatchInlineSnapshot(`
        [
          20,
          65,
          50,
          91,
          41,
        ]
      `);
    });
    it("DEF preOrder", () => {
      suit.insert(65);
      suit.insert(20);
      suit.insert(50);
      suit.insert(91);
      expect(suit.DFSInOrder()).toMatchInlineSnapshot(`
        [
          20,
          41,
          65,
          50,
          91,
        ]
      `);
    });
  });
});
