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
 *
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
