/** Graphs
 *  Graphs is collection of node
 */
/** Represent Our Graphs - Adjacency List and Adjacency matrix
 *  => Adjacency List
 *  - Adjacency list is the we we represent the graph node on
 *   the index as node an the value as the connection
 *  - Adjacency List=
 *     0 [[3],
 *     1  [3],
 *     2  [3],
 *     3  [0,1,2,4],
 *     4  [3,5],
 *     5  [4]]
 * => Adjacency Matrix
 *       0, 1, 2, 3, 4, 5,
 *   0 [[0, 0, 0, 1, 0, 0 ],
 *   1  [0, 0, 0, 1, 0, 0 ],
 *   2  [0, 0, 0, 1, 0, 0 ],
 *   3  [1, 1, 1, 0, 1, 0 ],
 *   4  [0, 0, 0, 1, 0, 1 ],
 *   5  [0, 0, 0, 0, 1, 0 ]]
 */
// class treeNode {
//   public left: treeNode | null = null;
//   public right: treeNode | null = null;
//   constructor(public value: number) {}
//   insert(val:number){
//     let newNode=new treeNode(val)
//     let queue=[this]
//     for(let )
//   }
// }
// export const testTree = new treeNode(6)
export class Graph {
  public adjacencyList: Record<number, number[]> = {};
  insert(node: number) {
    this.adjacencyList[node] = [];
    return this;
  }
  addVortex(nodeOne: number, nodeTwo: number) {
    this.adjacencyList[nodeOne].push(nodeTwo);
    this.adjacencyList[nodeTwo].push(nodeOne);
    return this;
  }
  insertMuch(arr: number[]) {
    if (!arr.length) return this;
    let node = arr.shift()!;
    this.insert(node);
    this.insertMuch(arr);
    return this;
  }
  addVertexMuch(metrics: Array<Array<number>>) {
    if (!metrics.length) return this;
    let [nodeOne, nodeTwo] = metrics.shift()!;
    this.addVortex(nodeOne, nodeTwo);
    this.addVertexMuch(metrics);
    return this;
  }
  traverseDef() {
    let firstNode = Object.keys(this.adjacencyList)[0];
    return traverseDef(+firstNode, this.adjacencyList);
  }
  traversalBFS() {
    return traversalBFS(this.adjacencyList);
  }
}
export const traversalBFS = function (graph: Record<number, number[]>) {
  const seen: Record<number, boolean> = {};
  const queue: number[] = [];
  const values: number[] = [];
  let firstNode = Object.keys(graph)[0];
  queue.push(+firstNode);
  while (queue.length) {
    const vertex = queue.shift()!;
    values.push(vertex);
    seen[vertex] = true;
    const connections = graph[vertex];
    for (let vrtx = 0; vrtx < connections.length; vrtx++) {
      if (!seen[connections[vrtx]]) {
        queue.push(connections[vrtx]);
      }
    }
  }
  return values;
};

export const traverseDef = (
  node: number,
  graph: Record<number, number[]>,
  seen: Record<number, boolean> = {},
  list: number[] = []
) => {
  if (seen[node]) return;
  seen[node] = true;
  list.push(node);
  graph[node].forEach((vert) => {
    traverseDef(vert, graph, seen, list);
  });
  return list;
};
/** Time Needed to Inform All Employees
 *  You will receive a managers array where managers[i] is
 * the ID of the managers for employee i . each employee has
 * no direct manager. The company head has no manager
 * (managers[HeadId]=1). its guaranteed the subordination
 * relationship will have a tree structure
 *
 * 8 employees : 0,1,2,3,4,5,6,7
 * headId=4
 * managers=[2,2,4,6,-1,4,4,5]
 * The head of the company wants to informs all employees of
 * news . he will inform his direct subordinates who will inform
 *  their direct subordinates and so on until everyone know the
 *  news
 *  you will receive an information Time array where inform
 * Time[i] is the time it takes for employee i to inform all
 * their direct subordinates. return the total number of minutes
 *  it takes to inform all employees of the news
 *  informTime=[0,0,4,0,7,3,6,0]
 */
const managersArray = [2, 2, 4, 6, -1, 4, 4, 5];
const informTimeArray = [0, 0, 4, 0, 7, 3, 6, 0];

const numOfMinutes = function (
  n: number,
  headID: number,
  managers: number[],
  informTime: number[]
) {
  const adjList = managers.map(() => []) as number[][];
  for (let employee = 0; employee < n; employee++) {
    const manager = managers[employee];
    if (manager === -1) continue;
    adjList[manager].push(employee);
  }
  return dfs(headID, adjList, informTime);
};
const dfs = function (
  currentId: number,
  adjList: number[][],
  informTime: number[]
) {
  if (adjList[currentId].length === 0) {
    return 0;
  }
  let max = 0;
  const subordinates = adjList[currentId];
  for (let i = 0; i < subordinates.length; i++) {
    max = Math.max(max, dfs(subordinates[i], adjList, informTime));
  }
  return max + informTime[currentId];
};

console.log(numOfMinutes(8, 4, managersArray, informTimeArray));
/** Course Scheduler
 *  There are a total of n courses to take, labeled from  0 to
 * n-1. some courses have prerequisite courses. this is
 *  expressed as a pair i.e [1,0] which indicates you must
 * take course 0 before taking 1
 */
/**
 * on this case we just need to detection cycle
 */
const p = [
  [1, 0],
  [2, 1],
  [2, 5],
  [0, 3],
  [4, 3],
  [3, 5],
  [4, 5],
];

const canFinish = function (n: number, prerequisites: number[][]) {
  const adjList = new Array(n).fill(0).map(() => []) as number[][];
  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0]);
  }
  for (let v = 0; v < n; v++) {
    const queue: number[] = [];
    const seen: Record<number, boolean> = {};
    for (let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }
    while (queue.length) {
      const current = queue.shift()!;
      seen[current] = true;
      if (current === v) return false;
      const adjacent = adjList[current];
      for (let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if (!seen[next]) {
          queue.push(next);
        }
      }
    }
  }
  return true;
};

canFinish(6, p);
/** Topological Sort
 *
 *
 */
const canFinishWithAdj = function (n: number, prerequisites: number[][]) {
  const inDegree = new Array(n).fill(0) as number[];
  const adjList = inDegree.map(() => []) as number[][];
  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    inDegree[pair[0]]++;
    adjList[pair[1]].push(pair[0]);
  }
  const stack: number[] = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }
  let count = 0;
  while (stack.length) {
    const current = stack.pop()!;
    count++;
    const adjacent = adjList[current];
    for (let i = 0; i < adjacent.length; i++) {
      const next = adjacent[i];
      inDegree[next]--;
      if (inDegree[next] === 0) {
        stack.push(next);
      }
    }
  }
  return count === n;
};

canFinishWithAdj(6, p);
const canFinishSecond = function (n: number, prerequisites: number[][]) {
  const inDegree = new Array(n).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
  }

  const stack = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }

  let count = 0;

  while (stack.length) {
    const current = stack.pop();
    count++;

    for (let i = 0; i < prerequisites.length; i++) {
      const pair = prerequisites[i];
      if (pair[1] === current) {
        inDegree[pair[0]]--;
        if (inDegree[pair[0]] === 0) {
          stack.push(pair[0]);
        }
      }
    }
  }

  return count === n;
};

canFinishSecond(6, p);
/** Network Time Delay
 *  There are n network nodes labelled 1 to n . Given a time
 * array, containing edges represented by array [u, v, w] when
 * u is the source node , v is the target node, and w is the
 * time taken to travel from the source node to the target
 * node
 * Send a signal from node k, return how long it takes for
 * all nodes to receive the signal . return -1 if it's impossible
 */
/** Greedy method
 *
 *
 */
class PriorityQueue {
  public _heap: number[] = [];
  public _comparator: (a: number, b: number) => boolean = (a, b) => a > b;
  constructor(comparator: (a: number, b: number) => boolean) {
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx: number) {
    return idx * 2 + 1;
  }

  _rightChild(idx: number) {
    return idx * 2 + 2;
  }

  _swap(i: number, j: number) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i: number, j: number) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value: number) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

const t = [
  [1, 2, 9],
  [1, 4, 2],
  [2, 5, 1],
  [4, 2, 4],
  [4, 5, 6],
  [3, 2, 3],
  [5, 3, 7],
  [3, 1, 5],
];
/**
 *
 * @param times
 * @param N
 * @param k
 * @returns
 */
const networkDelayTime = function (times: number[][], N: number, k: number) {
  const distances = new Array(N).fill(Infinity) as number[];
  const adjList = distances.map(() => []) as number[][][];
  distances[k - 1] = 0;
  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
  heap.push(k - 1);
  for (let i = 0; i < times.length; i++) {
    const source = times[i][0];
    const target = times[i][1];
    const weight = times[i][2];
    adjList[source - 1].push([target - 1, weight]);
  }
  while (!heap.isEmpty()) {
    const currentVertex = heap.pop()!;
    const adjacent = adjList[currentVertex];
    for (let i = 0; i < adjacent.length; i++) {
      const neighboringVertex = adjacent[i][0];
      const weight = adjacent[i][1];
      if (distances[currentVertex] + weight < distances[neighboringVertex]) {
        distances[neighboringVertex] = distances[currentVertex] + weight;
        heap.push(neighboringVertex);
      }
    }
  }
  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};

console.log(networkDelayTime(t, 5, 1));
/**Thinking About Negative Weights
 *
 */
/** Bellman-Ford Algorithm
 *
 */

const networkDelayTimeSecond = function (
  times: number[][],
  N: number,
  k: number
) {
  const distances = new Array(N).fill(Infinity);

  distances[k - 1] = 0;
  for (let i = 0; i < N - 1; i++) {
    let count = 0;
    for (let j = 0; j < times.length; j++) {
      const source = times[j][0];
      const target = times[j][1];
      const weight = times[j][2];

      if (distances[source - 1] + weight < distances[target - 1]) {
        distances[target - 1] = distances[source - 1] + weight;
        count++;
      }
    }

    if (count === 0) break;
  }

  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};

console.log(networkDelayTimeSecond(t, 5, 1));
