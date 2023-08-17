import { it, describe, expect } from "vitest";
import { SearchString } from ".";

describe("search", () => {
  it("search String", () => {
    expect(SearchString("halllo", "lo")).toBe(true);
    expect(SearchString("dewa", "lo")).toBe(false);
  });
});
