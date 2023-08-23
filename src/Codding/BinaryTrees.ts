/** Given a binary tree, find its maximum depth.
 * Maximum depth is teh number of nodes along the longest path from
 * the root node to the furthest leaf node
 */
/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------

export class TreeNode {
  public left: TreeNode | null = null;
  public right: TreeNode | null = null;
  constructor(public value: number | null = null) {}
  insert(values: (number | null)[]) {
    const queue: TreeNode[] = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift()!;
      for (let side of [
        "left" as unknown as TreeNode["left"],
        "right" as unknown as TreeNode["right"],
      ]) {
        if (!side) return;
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

const root = new TreeNode();
root.insert([1, 1, 1, 1, null, null, null, 1, null, null, null, 1, null, null]);

// ------- Code to generate our binary tree -------

// ------- Our Solution -------
export var maxDepth = function (node: TreeNode, currentDepth: number): number {
  if (!node) {
    return currentDepth;
  }

  currentDepth++;

  return Math.max(
    maxDepth(node.right!, currentDepth),
    maxDepth(node.left!, currentDepth)
  );
};

console.log(maxDepth(root, 0));
