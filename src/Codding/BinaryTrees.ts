/** Given a binary tree, find its maximum depth.
 * Maximum depth is teh number of nodes along the longest path from
 * the root node to the furthest leaf node
 */
/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------
class Nodes {
  public left: Nodes | null = null;
  public right: Nodes | null = null;
  constructor(public value: number | null = null) {}
}
export class BinaryTree {
  public root: Nodes | null = null;

  insertOne(val: number) {
    const newNode = new Nodes(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    insertNodeTree(this.root!, newNode);
    return this;
  }
}
const insertNodeTree = (node: Nodes, newNode: Nodes): Nodes | null => {
  if (newNode.value! < node.value!) {
    if (node.left === null) {
      node.left = newNode;
      return node;
    } else if (node.left !== null) {
      return insertNodeTree(node.left, newNode);
    }
  } else if (newNode.value! > node.value!) {
    if (node.right === null) {
      node.right = newNode;
      return node;
    } else if (node.right !== null) {
      return insertNodeTree(node.right, newNode);
    }
  } else {
    return null;
  }
  return null;
};
// // ------- Our Solution -------
export var maxDepth = function (node: Nodes, currentDepth: number = 0): number {
  if (!node) {
    return currentDepth;
  }
  currentDepth++;
  return Math.max(
    maxDepth(node.right!, currentDepth),
    maxDepth(node.left!, currentDepth)
  );
};
/**Level order of binary tree
 *
 */
export const levelOrder = function (root: Nodes) {
  if (!root) return [];
  const result: (number | number[])[] = [];
  const queue = [root];
  while (queue.length) {
    const currentLevelValues: number[] = [];
    let length = queue.length,
      count = 0;
    while (count < length) {
      const currentNode = queue.shift()!;
      currentLevelValues.push(currentNode.value!);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      count++;
    }
    result.push(currentLevelValues);
  }
  return result;
};
/** Right side view of tree
 * Given a binary tree, imagine you'r standing to the right
 * of the tree.  Return an array of the values of the nodes
 * you can see ordered from top to bottom
 */
const dfs = (node: Nodes, currentLevel = 0, result: number[]) => {
  if (!node) return;
  if (currentLevel >= result.length) {
    result.push(node.value!);
  }

  if (node.right) {
    dfs(node.right, currentLevel + 1, result);
  }

  if (node.left) {
    dfs(node.left, currentLevel + 1, result);
  }
};
export const rightSideViewDFS = (root: Nodes) => {
  const result: number[] = [];

  dfs(root, 0, result);
  return result;
};
/** Number of Nodes in Complete Tree
 * Given a complete binary tree, count the number of nodes
 */
const getTreeHeight = function (root: Nodes) {
  let height = 0;
  while (root.left !== null) {
    height++;
    root = root.left;
  }
  return height;
};
const nodeExists = function (idxToFind: number, height: number, node: Nodes) {
  let left = 0,
    right = Math.pow(2, height) - 1,
    count = 0;
  while (count < height) {
    const midOfNode = Math.ceil((left + right) / 2);
    if (idxToFind >= midOfNode) {
      node = node.right!;
      left = midOfNode;
    } else {
      node = node.left!;
      right = midOfNode - 1;
    }
    count++;
  }
  return node !== null;
};
export const countNodes = function (root: Nodes) {
  if (!root) return 0;
  const height = getTreeHeight(root);
  if (height === 0) return 1;
  const upperCount = Math.pow(2, height) - 1;
  let left = 0,
    right = upperCount;
  while (left < right) {
    const idxToFind = Math.ceil((left + right) / 2);
    if (nodeExists(idxToFind, height, root)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }
  return upperCount + left + 1;
};
