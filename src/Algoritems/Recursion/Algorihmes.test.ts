import { it, describe, expect } from "vitest";
import { factorialIterative, factorialRecursive } from "./Factorial";
import { fibonacciIterative, fibonacciRecursive } from "./Fibonacci";
describe("algorithms test factorial", () => {
  const testOne = {
    input: 4,
    output: 24,
  };
  it.each([
    {
      input: testOne.input,
      output: testOne.output,
    },
  ])("expected $input to return $output", ({ input, output }) => {
    const iterative = factorialIterative(input);
    const recursive = factorialRecursive(input);
    expect(iterative).toBe(recursive);
    expect(iterative).toBe(output);
    expect(recursive).toBe(output);
  });
});
describe("algorithms test fibonacci", () => {
  const testOne = {
    input: 9,
    output: 34,
  };
  it.each([
    {
      input: testOne.input,
      output: testOne.output,
    },
  ])("expected $input to return $output", ({ input, output }) => {
    const iterative = fibonacciIterative(input);
    const recursive = fibonacciRecursive(input);
    expect(iterative).toBe(recursive);
    expect(iterative).toBe(output);
    expect(recursive).toBe(output);
  });
});
