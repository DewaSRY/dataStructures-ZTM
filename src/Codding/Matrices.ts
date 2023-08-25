/**  2D Arrays or Matrices
 *  matrix is the array contain other array
 */
export class Matrix {
  public matrix: Array<Array<number>> = [];

  insertRow(arr: number[]) {
    this.matrix.push(arr);
    return this;
  }
  traversal() {
    return traversalDFS(this.matrix);
  }
  traversalBFS() {
    return traversalBFS(this.matrix);
  }
}
/** Traversal Algorithms
 * on this section we will learn how to traverse around the metric
 * which mean we going node by node inside the metric, just like
 * binary tree we also can implement deep first search and breadth
 * first search
 */
/** Deep first search on metric
 *
 */
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];
const traversalDFS = function (matrix: Array<Array<any>>) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  const values: number[] = [];
  dfsMatrix(matrix, 0, 0, seen, values);
  return values;
};
const dfsMatrix = function (
  matrix: Array<Array<any>>,
  row: number,
  col: number,
  seen: Array<Array<any>>,
  values: number[]
) {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  )
    return;
  seen[row][col] = true;
  values.push(matrix[row][col]);
  for (let i = 0; i < directions.length; i++) {
    const [rowDir, colDir] = directions[i];
    dfsMatrix(matrix, row + rowDir, col + colDir, seen, values);
  }
};
/** Breadth First Search metric
 *
 */
const traversalBFS = function (matrix: Array<Array<any>>) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  const values = [];
  const queue = [[0, 0]];
  while (queue.length) {
    const [row, col] = queue.shift()!;
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      seen[row][col]
    ) {
      continue;
    }
    seen[row][col] = true;
    values.push(matrix[row][col]);
    for (let i = 0; i < directions.length; i++) {
      const [rowDir, colDir] = directions[i];
      queue.push([row + rowDir, col + colDir]);
    }
  }
  return values;
};
/** Number of islands
 * Given a 2D array containing only 1 (land) and 0 (water)
 * count the number of islands. An island is land connected
 * horizontally or vertically
 * => Test case
 * -> are the edges of the 2D array is water?
 * --> yes, assume anything outside of the 2D array is water
 */
/** Approaching the problem
 * we use two loop to solve the problem the first loop use
 *  to find the island then se second loop to recognize
 *  the relation lend and make turn it into 0(water) to avoid
 *  double counting then after no relation island we move to
 *  first loop and repeated the step until the end of metrics
 */
/** Number of Islands - DFS
 *
 */
const dfsIsland = function (
  grid: Array<Array<number>>,
  currentRow: number,
  currentCol: number
) {
  if (
    currentRow < 0 ||
    currentRow >= grid.length ||
    currentCol < 0 ||
    currentCol >= grid[0].length
  )
    return;
  if (grid[currentRow][currentCol] === 1) {
    grid[currentRow][currentCol] = 0;
    for (let i = 0; i < directions.length; i++) {
      const [rowDir, colDir] = directions[i];
      dfsIsland(grid, currentRow + rowDir, currentCol + colDir);
    }
  }
};
export const numberOfIslands = function (grid: Array<Array<number>>) {
  if (!grid.length) return 0;
  let islandCount = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        islandCount++;
        dfsIsland(grid, row, col);
      }
    }
  }
  return islandCount;
};
/** Number of Islands - BFS
 *
 */
export const numberOfIslandsBFS = function (matrix: Array<Array<number>>) {
  if (matrix.length === 0) return 0;
  let islandCount = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        islandCount++;
        matrix[row][col] = 0;
        const queue: Array<Array<number>> = [];
        queue.push([row, col]);
        while (queue.length) {
          const [currentRow, currentCol] = queue.shift()!;
          for (let i = 0; i < directions.length; i++) {
            const [rowDir, collDir] = directions[i];
            const nextRow = currentRow + rowDir;
            const nextCol = currentCol + collDir;
            if (
              nextRow < 0 ||
              nextRow >= matrix.length ||
              nextCol < 0 ||
              nextCol >= matrix[0].length
            )
              continue;
            if (matrix[nextRow][nextCol] === 1) {
              queue.push([nextRow, nextCol]);
              matrix[nextRow][nextCol] = 0;
            }
          }
        }
      }
    }
  }

  return islandCount;
};
/** Given a 2D array containing 0's (empty cell), 1's
 * (fresh orange) and 2's (rotten orange). Every minutes,
 * all fresh orange immediately adjacent (4 directions) to
 * rotten oranges will will rot.
 * How many minutes must pass until all oranges are rotten ?
 */
/** Approach solution
 * 1. Get all Initial rotten orange and put it into queue
 * 2. count all fresh orange
 *
 * 3 we track every minute by the count how many time the queue get
 *  initiate which the level of the insertion level
 * 4 every looping the queue will get several new coordinate
 * from the rotten orange before, the frequent of the rotten
 * orange turn other orange to new rotten count as the minutes
 * 5 avery increment of the rotten orange the fresh orange will
 *  decrement
 * 6 and if the fresh orange is not zero the means all orange
 * will never get rotten we return zero
 * 7 if all orange get rotten return the minutes
 */

// const testMatrix = [
//   [2, 1, 1, 0, 0],
//   [1, 1, 1, 0, 0],
//   [0, 1, 1, 1, 1],
//   [0, 1, 0, 0, 1]
// ];

const ROTTEN = 2;
const FRESH = 1;
// const EMPTY = 0;

export const orangesRotting = function (matrix: Array<Array<number>>) {
  if (matrix.length === 0) return 0;
  const queue: Array<Array<number>> = [];
  let freshOranges = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === ROTTEN) {
        queue.push([row, col]);
      }
      if (matrix[row][col] === FRESH) {
        freshOranges++;
      }
    }
  }
  let minutes = 0;
  let currentQueueSize = queue.length;
  while (queue.length > 0) {
    if (currentQueueSize === 0) {
      currentQueueSize = queue.length;
      minutes++;
    }
    const [orangeRow, orangeCol] = queue.shift()!;
    currentQueueSize--;
    const row = orangeRow;
    const col = orangeCol;
    for (let i = 0; i < directions.length; i++) {
      const [rowDir, colDir] = directions[i];
      const nextRow = row + rowDir;
      const nextCol = col + colDir;
      if (
        nextRow < 0 ||
        nextRow >= matrix.length ||
        nextCol < 0 ||
        nextCol >= matrix[0].length
      ) {
        continue;
      }
      if (matrix[nextRow][nextCol] === FRESH) {
        matrix[nextRow][nextCol] = 2;
        freshOranges--;
        queue.push([nextRow, nextCol]);
      }
    }
  }
  if (freshOranges !== 0) {
    return -1;
  }
  return minutes;
};
/** Walls And Gates
 * Given a 2D array containing - 1 (walls) 0's (gates)
 * and INF's (empty room). fill each empty room with the
 * number of step to the nearest gate
 *
 * if it impossible to reach a gate, leave INF as the value
 * INF is equal to 2147483647
 *
 * INF => infinity
 */
// const testMatrix = [
//   [INF, -1, 0, INF],
//   [INF, INF, INF, 0],
//   [INF, -1, INF, -1],
//   [0, -1, INF, INF]
// ];

// const WALL = -1;
// const GATE = 0;
// const EMPTY = 2147483647;

const dfsWallAndGate = (
  grid: Array<Array<number>>,
  row: number,
  col: number,
  count: number = 0
) => {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    count > grid[row][col]
  )
    return;
  grid[row][col] = count;
  for (let i = 0; i < directions.length; i++) {
    const [rowDir, colDir] = directions[i];
    dfsWallAndGate(grid, row + rowDir, col + colDir, count + 1);
  }
};
export const wallsAndGates = (rooms: Array<Array<number>>) => {
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === 0) dfsWallAndGate(rooms, row, col, 0);
    }
  }
};

// wallsAndGates(testMatrix)
