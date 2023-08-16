import { describe, it, expect, beforeEach } from "vitest";
import { HashTable } from "./index";
const hashWithThreevalue = [
  [
    [
      ["first", 1],
      ["second", 2],
    ],
  ],
  [[["three", 3]]],
];

describe.skip("Hash-Table suit test", () => {
  let suit: HashTable<number>;
  beforeEach(() => {
    suit = new HashTable<number>(2);
  });
  it("should set an item", () => {
    suit.set("first", 1);
    suit.set("second", 2);
    suit.set("three", 3);
    // const actual = JSON.stringify(suit.data, null, 2);
    // console.log(actual);
    expect(suit.data).toEqual(hashWithThreevalue);
  });
  it("should get item match the key", () => {
    suit = new HashTable<number>(50);
    suit.set("first", 1);
    suit.set("second", 2);
    suit.set("three", 3);
    suit.set("four", 3);
    suit.set("five", 3);
    suit.set("six", 3);
    suit.set("seven", 3);
    // const actual = JSON.stringify(suit.get("second"), null, 2);
    // console.log(actual);
    expect(suit.get("second")).toEqual(["second", 2]);
  });
  it("the data get mapped", () => {
    suit = new HashTable<number>(50);
    suit.set("first", 1);
    suit.set("second", 2);
    // suit.set("three", 3);
    // suit.set("four", 3);
    // suit.set("five", 3);
    // suit.set("six", 3);
    // suit.set("seven", 3);
    expect(suit.keys()).toEqual({
      second: 2,
      first: 1,
    });
  });
});
