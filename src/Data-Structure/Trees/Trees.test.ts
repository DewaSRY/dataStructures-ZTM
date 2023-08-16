import { describe, it, expect, beforeEach } from "vitest";
import { Trees, traverse } from "./index";

describe.skip("trees test suit", () => {
  let suit: Trees;
  beforeEach(() => {
    suit = new Trees();
  });
  it("should insert value on the tree", () => {
    suit.insert(1);
    suit.insert(2);
    suit.insert(3);
    suit.insert(4);
    suit.insert(5);
    suit.insert(6);
    // const actual = JSON.stringify(suit.root?.right?.right?.right, null, 2);
    expect(suit.root?.value).toBe(1);
    expect(suit.root?.right?.value).toBe(2);
    expect(suit.root?.right?.right?.value).toBe(3);
    expect(suit.root?.right?.right?.right?.value).toBe(4);
    expect(suit.root?.right?.right?.right?.right?.value).toBe(5);
    expect(suit.root?.right?.right?.right?.right?.right?.value).toBe(6);
  });
  it("should insert value on the tree", () => {
    suit.insert(6);
    suit.insert(3);
    suit.insert(1);
    suit.insert(4);
    suit.insert(2);
    suit.insert(5);
    // const actual = JSON.stringify(suit.root?.left, null, 2);
    // console.log(actual);
    expect(suit.root?.value).toBe(6);
    expect(suit.root?.left?.value).toBe(3);
    expect(suit.root?.left?.left?.value).toBe(1);
    expect(suit.root?.left?.left?.right?.value).toBe(2);
    expect(suit.root?.left?.right?.value).toBe(4);
    expect(suit.root?.left?.right?.right?.value).toBe(5);
  });
  it("test traverse", () => {
    suit.insert(6);
    suit.insert(3);
    suit.insert(1);
    suit.insert(3);
    suit.insert(1);
    suit.insert(4);
    suit.insert(2);
    const actual = JSON.stringify(traverse(suit.root!), null, 2);
    expect(actual).toMatchInlineSnapshot(`
      "{
        \\"left\\": {
          \\"left\\": {
            \\"left\\": null,
            \\"right\\": {
              \\"left\\": null,
              \\"right\\": {
                \\"left\\": null,
                \\"right\\": null,
                \\"value\\": 2
              },
              \\"value\\": 1
            },
            \\"value\\": 1
          },
          \\"right\\": {
            \\"left\\": null,
            \\"right\\": {
              \\"left\\": null,
              \\"right\\": null,
              \\"value\\": 4
            },
            \\"value\\": 3
          },
          \\"value\\": 3
        },
        \\"right\\": null,
        \\"value\\": 6
      }"
    `);
  });
});
