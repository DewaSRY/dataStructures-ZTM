import { describe, it } from "vitest";
import { Trie } from "./Trie";
describe("component ", () => {
  let t = new Trie();
  it("test", () => {
    t.addWord("fun");
    t.addWord("fast");
    t.addWord("fat");
    t.addWord("fate");
    t.addWord("father");
    t.addWord("forget");
    t.addWord("awesome");
    t.addWord("argue");
    // console.log(t.findWord("taco"));
    // console.log(Object.values(t.characters)[0]);
    console.log(t.getWords());
  });
});
