/** Back Tracking
 *  Return all Solutions
 *
 * Return a valid solution amongst all solutions
 */
/** Sudoku Solver
 *  Create a function that solver for any 9 * 9 sudoku puzzle given
 */
/**getBoxId
 * use to track which box the coll,row is
 *
 */
function getBoxId(row: number, col: number) {
  const colVal = Math.floor(col / 3);
  const rowVal = Math.floor(row / 3) * 3;
  return colVal + rowVal;
}
export function sduSudoku(board: number[][]) {
  const n = board.length;
  const boxes: Record<number, boolean>[] = new Array(n);
  const rows: Record<number, boolean>[] = new Array(n);
  const cols: Record<number, boolean>[] = new Array(n);
  for (let i = 0; i < n; i++) {
    boxes[i] = {};
    rows[i] = {};
    cols[i] = {};
  }
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] !== 0) {
        const val = board[r][c];
        const boxId = getBoxId(r, c);
        boxes[boxId][val] = true;
        rows[r][val] = true;
        cols[c][val] = true;
      }
    }
  }
  solveBackTrack(board, boxes, rows, cols);
  return board;
}
export function solveBackTrack(
  board: number[][],
  boxes: Record<number, boolean>[],
  rows: Record<number, boolean>[],
  cols: Record<number, boolean>[],
  r = 0,
  c = 0
) {
  if (r === board.length || c === board[0].length) return true;
  else {
    if (board[r][c] === 0) {
      for (let num = 1; num <= 9; num++) {
        const numVal = num;
        board[r][c] = numVal;
        const boxId = getBoxId(r, c);
        const box = boxes[boxId];
        const row = rows[r];
        const col = cols[c];
        if (isValid(box, row, col, numVal)) {
          box[numVal] = true;
          row[numVal] = true;
          col[numVal] = true;
          if (c === board[0].length - 1) {
            if (solveBackTrack(board, boxes, rows, cols, r++, c)) {
              return true;
            } else {
              if (solveBackTrack(board, boxes, rows, cols, r, c++)) {
                return true;
              }
            }
            delete box[numVal];
            delete row[numVal];
            delete col[numVal];
          }
          board[r][c] = 0;
        } else {
          if (c === board[0].length) {
            if (solveBackTrack(board, boxes, rows, cols, r++, 0)) {
              return true;
            }
          } else {
            if (solveBackTrack(board, boxes, rows, cols, r, c++)) {
              return true;
            }
          }
        }
      }
    }
  }
}
function isValid(
  box: Record<number, boolean>,
  rows: Record<number, boolean>,
  col: Record<number, boolean>,
  num: number
) {
  if (box[num] || rows[num] || col[num]) return false;
  return true;
}
