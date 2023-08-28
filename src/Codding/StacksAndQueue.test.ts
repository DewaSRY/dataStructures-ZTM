import { describe, it, expect } from "vitest";
import { MinimumBracketsToRemove, QueueSe } from "./StacksAndQueue";
describe("component ", () => {
  describe(" Minimum Brackets To Remove", () => {
    let suit = MinimumBracketsToRemove;
    it.each([
      { str: ")abc(d)", output: "abc(d)" },
      { str: "abc(d))", output: "abc(d)" },
      { str: "))((", output: "" },
    ])("$str should return $output", ({ str, output }) => {
      expect(suit(str)).toBe(output);
    });
  });
  //   let suit = MinimumBracketsToRemove;
  //   it("first test", () => {
  //     console.log(suit());
  //   });
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
  it.todo("should have some property ");
});
it("test", () => {
  let suit = new QueueSe();
  suit.enqueue(10);
  suit.enqueue(100);
  suit.enqueue(1000);

  console.log(suit);
});
