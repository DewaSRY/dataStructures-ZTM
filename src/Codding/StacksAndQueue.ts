/** Stacks and queue
 *Given a string containing only parentheses, determine if it
 *is valid The string is valid id all parentheses close
 */

// const string = "{()[]}";
const parens: Record<string, string> = {
  "(": ")",
  "{": "}",
  "[": "]",
};
export var isValid = function (s: string) {
  if (s.length === 0) return true;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(s[i]);
    } else {
      const leftBracket = stack.pop()!;
      const correctBracket = parens[leftBracket];
      if (s[i] !== correctBracket) return false;
    }
  }

  return stack.length === 0;
};
/** Minimum Brackets to remove
 *  Given a string only contains round brackets "(" and ")" and
 * lowerCase characters, remove the least amount of brackets so
 * the string is valid. A string is considered valid if it is
 * empty or if there are brackets, they all close
 * -> the way we solve it is to change the unClose bracket
 * with empty string so the index is not chang e
 */

export function MinimumBracketsToRemove(str: string) {
  const res = str.split("");
  const stack = [];
  for (let i = 0; i < res.length; i++) {
    if (res[i] === "(") {
      stack.push(i);
    } else if (res[i] === ")" && stack.length) {
      stack.pop();
    } else if (res[i] === ")") {
      res[i] = "";
    }
  }
  while (stack.length) {
    const curIdx = stack.pop()!;
    res[curIdx] = "";
  }

  return res.join("");
}
/**Implement Queue with stack
 *
 */
export class QueueWithStacks {
  public in: number[] = [];
  public out: number[] = [];

  enqueue(val: number) {
    this.in.push(val);
  }
  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop()!);
      }
    }
    return this.out.pop();
  }
  peek() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop()!);
      }
    }

    return this.out[this.out.length - 1];
  }

  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}
