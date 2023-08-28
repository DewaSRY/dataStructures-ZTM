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
export class Stack {
  public first = new Queue();
  public last = new Queue();
  public temp = new Queue();
  constructor() {}
  push(val: number) {
    if (this.first.size !== 0) {
      while (this.first.size != 0) {
        this.last.enqueue(this.first.dequeue()!);
      }
    }
    this.first.enqueue(val);
    return this;
  }
  pop() {
    if (this.first.size === 1) {
      return this.first.dequeue();
    } else {
      while (this.last.size !== 0) {
        if (this.last.size === 1) {
          this.first.enqueue(this.last.dequeue()!);
        } else {
          this.temp.enqueue(this.last.dequeue()!);
        }
      }
      while (this.temp.size) {
        this.last.enqueue(this.temp.dequeue()!);
      }
      return this.first.dequeue();
    }
  }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
  public next: null | Node = null;
  constructor(public value: number) {}
}

class Queue {
  public first: Node | null = null;
  public last: Node | null = null;
  public size: number = 0;
  constructor() {}
  enqueue(data: number) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last!.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

export class QueueSe {
  public first: Node | null = null;
  public last: Node | null = null;
  public size: number = 0;
  constructor() {}
  enqueue(val: number) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last!.next = newNode;
      this.last = this.last!.next;
    }

    return ++this.size;
  }
}
