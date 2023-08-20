import { describe, it, expect, beforeEach } from "vitest";
import { HashTable } from "./HashTables";
describe("component ", () => {
  let suit: HashTable<number>;
  beforeEach(() => {
    suit = new HashTable<number>(4);
  });
  describe("hash function", () => {
    it.each([
      { input: "banana" },
      { input: "apple" },
      { input: ",mango" },
      { input: ",chary" },
      { input: ",pier" },
      { input: ",donuts" },
      { input: ",pizza" },
    ])("hashing should constant ", ({ input }) => {
      expect(suit.hash(input)).toBe(suit.hash(input));
    });
  });
  describe("set should put new value or update new value", () => {
    it.each([
      { key: "banana", value: 12 },
      { key: "apple", value: 7 },
      { key: ",mango", value: 14 },
      { key: ",chary", value: 33 },
      { key: ",pier", value: 16 },
      { key: ",donuts", value: 88 },
      { key: ",pizza", value: 15 },
    ])(
      "set should store $key as $value and return [$key,$value] ",
      ({ key, value }) => {
        expect(suit.set(key, value)).toEqual([key, value]);
      }
    );
    it.each([
      { key: "banana", value: 12 },
      { key: "apple", value: 7 },
      { key: ",mango", value: 14 },
      { key: ",chary", value: 33 },
      { key: ",pier", value: 16 },
      { key: ",donuts", value: 88 },
      { key: ",pizza", value: 15 },
    ])("$key and return [$key,12] after update ", ({ key, value }) => {
      suit.set(key, value);
      expect(suit.set(key, 12)).toEqual([key, 12]);
    });
  });
  describe("get should return right tuple ", () => {
    it.each([
      { key: "banana", value: 12 },
      { key: "apple", value: 7 },
      { key: "mango", value: 14 },
      { key: "chary", value: 33 },
      { key: "pier", value: 16 },
      { key: "donuts", value: 88 },
      { key: "pizza", value: 15 },
    ])("get with $key should return [$key,$value] ", ({ key, value }) => {
      suit.set(key, value);
      expect(suit.get(key)).toEqual([key, value]);
    });
    it.each([
      { key: "banana", value: 12 },
      { key: "apple", value: 7 },
      { key: "mango", value: 14 },
      { key: "chary", value: 33 },
      { key: "pier", value: 16 },
      { key: "donuts", value: 88 },
      { key: "pizza", value: 15 },
    ])("get with $key+0 should throw error", ({ key, value }) => {
      suit.set(key, value);
      expect(() => suit.get(key + 0)).toThrowError(
        `${key}0 doesn't match any data`
      );
    });
  });
  it("hash table pretty print", () => {
    suit.set("mango", 12);
    suit.set("apple", 23);
    suit.set("banana", 44);
    suit.set("mellon", 43);
    suit.set("corn", 13);
    expect(suit.prettyPrint()).toMatchInlineSnapshot(`
      [
        {
          "mango": 12,
        },
        {
          "banana": 44,
        },
        {
          "apple": 23,
        },
        {
          "mellon": 43,
        },
        {
          "corn": 13,
        },
      ]
    `);
  });
});
