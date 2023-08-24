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
}
/** Traversal Algorithms
 *
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
    const currentDir = directions[i];
    dfsMatrix(matrix, row + currentDir[0], col + currentDir[1], seen, values);
  }
};
