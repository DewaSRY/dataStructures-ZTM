/**Tree
 * a data structure that consists of nodes in a parent / child
 * relationship
 */
/**Tree terminology
 * Root= The top node in a tree
 * Child= A node directly connected to another
 *        node when moving away from th root
 * parent= The converse notion of child
 * siblings a group of nodes with the same parent
 * left= a node with no children
 * edge= the connection between one node and another
 */
/**Binary search tree
 * - the tree only can have two child every node
 * - then composition of the node will look like
 *   left childe < parent < right child
 *
 */

class Nodes {
  public left: Nodes | null = null;
  public right: Nodes | null = null;
  constructor(public value: number) {}
}
export class BinarySearchTree {
  public root: Nodes | null = null;
  constructor(value: number) {
    this.root = new Nodes(value);
  }
  /**Insert
   * On binary search tree we follow Left < parent < right role
   * so we just need compare the value with the parent value
   * if the value bigger then parent go to right
   * if the value is smaller go to the left
   * if the value already exist return void
   *
   */
  insert(value: number) {
    const NewNode = new Nodes(value);
    if (this.root === null) {
      this.root = NewNode;
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = NewNode;
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = NewNode;
          return;
        } else {
          currentNode = currentNode.right;
        }
      } else if (value === currentNode.value) return;
    }
  }
  find(value: number) {
    let currentNode = this.root;
    while (currentNode?.value !== value && currentNode) {
      if (value > currentNode?.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return currentNode;
  }
  remove(value: number) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left!;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right!;
      } else if (currentNode.value === value) {
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          } //Option 2: Right child which doesn`t have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          } //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          } //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;
          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
  breadForSearch() {
    if (!this.root) return this;
    return BreadForSearch(this.root!);
  }
  prettyPrint() {
    if (!this.root) return [];
    return BreadForSearchPrettyPrint(this.root!);
  }
  DFSPreOrder() {
    if (!this.root) return [];
    return TraversePreOrder(this.root!);
  }
  DFSPostOrder() {
    if (!this.root) return [];
    return TraversePostOrder(this.root!);
  }
  DFSInOrder() {
    if (!this.root) return [];
    return TraverseInOrder(this.root!);
  }
  BreadthFirstSearchR(queue: Nodes[] = [this.root!], list: number[]): number[] {
    if (!queue.length) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode!.value);
    if (currentNode!.left) {
      queue.push(currentNode!.left);
    }
    if (currentNode!.right) {
      queue.push(currentNode!.right);
    }
    return this.BreadthFirstSearchR(queue, list);
  }
  findSecondLargest() {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode?.right?.right === null) {
        return currentNode;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
  isBalanced() {
    let queue = [this.root];
    let left = 0,
      right = 0;
    while (queue.length) {
      let currentNode = queue.shift();
      if (currentNode?.left) {
        left++;
        queue.push(currentNode.left);
      }
      if (currentNode?.right) {
        right++;
        queue.push(currentNode.right);
      }
    }
    console.log(left, right);

    return Math.abs(left - right) <= 1;
  }
}
/**BFS
 * Create queue (this can be an array) and variable to store the values of nodes visited
 * -Place the root node in the queue
 * -Loop as long as there is anything in the queue
 * -> Dequeue a node from the queue and push of the node into the variable that store the node
 * ->if there is a left property on the node dequeued - add it to the queue
 * ->if there is a right property on the node dequeued - add it to the queue
 * -return the variable that store the values
 *
 */
export function BreadForSearch(node: Nodes) {
  let queue: Nodes[] = [];
  let visited = [];
  let currentNode = node;
  queue.push(currentNode);
  while (queue.length) {
    currentNode = queue.shift()!;
    visited.push(currentNode.value);
    if (currentNode.right) queue.push(currentNode?.right!);
    if (currentNode.left) queue.push(currentNode?.left!);
  }
  return visited;
}
export function BreadForSearchPrettyPrint(node: Nodes) {
  let queue: Nodes[] = [];
  let visited = [];
  let currentNode = node;
  queue.push(currentNode);
  while (queue.length) {
    currentNode = queue.shift()!;
    let nodeMap: {
      [key: number]: { [child: string]: number | null };
    } = {};
    nodeMap[currentNode.value] = {
      left: currentNode.left?.value || null,
      right: currentNode.right?.value || null,
    };
    visited.push(nodeMap);
    if (currentNode.right) queue.push(currentNode?.right!);
    if (currentNode.left) queue.push(currentNode?.left!);
  }

  return visited;
}
/**depth first search
 * is the method to search the node straight to the
 *  bottom then to other direction
 * -> DFS have tree style to traverse the node
 *   =>PreOrder
 *   =>PostOrder
 *   =>InOrder
 */
/** =>PreOrder
 * preOrder is the way we traverse from the top which the
 * first root to the child
 * -> on the code the way we implement it just by collet the
 * value on the first line before we traverse to other direction
 */
export function TraversePreOrder(node: Nodes, Lists: number[] = []) {
  Lists.push(node.value);
  if (node.left) Traverse(node.left, Lists);
  if (node.right) Traverse(node.right, Lists);
  return Lists;
}
/** =>PostOrder
 * PostOrder is the way we collet the value after we travel to
 *  all node
 * -> on the code the way we implement it just by collet the
 * value on the last line which after we traverse to all node
 *  */
export function TraversePostOrder(node: Nodes, Lists: number[] = []) {
  if (node.left) Traverse(node.left, Lists);
  if (node.right) Traverse(node.right, Lists);
  Lists.push(node.value);
  return Lists;
}
/** =>InOrder
 * InOrder is the way we collet the in order from the small
 *  number to the bigger which we traverse to the left node first
 * -> on the code the way we implement it just by collet the
 * value on the middle line among left and right, which we
 * collect the value after we traverse to the dipper of left
 * branch
 */
export function TraverseInOrder(node: Nodes, Lists: number[] = []) {
  if (node.left) Traverse(node.left, Lists);
  Lists.push(node.value);
  if (node.right) Traverse(node.right, Lists);
  return Lists;
}
export function Traverse(node: Nodes, Lists: number[] = []) {
  Lists.push(node.value);
  if (node.left) Traverse(node.left, Lists);
  if (node.right) Traverse(node.right, Lists);
  return Lists;
}
