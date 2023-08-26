import { isValid } from "./StacksAndQueue";
/** Back Tracking
 *  Return all Solutions
 *
 * Return a valid solution amongst all solutions
 */
/** Sudoku Solver
 *  Create a function that solver for any 9 * 9 sudoku puzzle given
 */
// export function recursive(args: number, ans: number[]) {
//   for (let i = 0; i < 9; i++) {
//     ans.push(i);
//   }
//   if (isValid()) {
//   }
// }
/**getBoxId
 * use to track which box the coll,row is
 *
 */
function getBoxId(row: number, col: number) {
  const colVal = Math.floor(col / 3);
  const rowVal = Math.floor(row / 3) * 3;
  return colVal + rowVal;
}
function sduSodoku(board: any[][]) {
  const n = board.length;
  const boxes = new Array(n);
  const rows = new Array(n);
  const cols = new Array(n);
  for (let i = 0; i < n; i++) {
    boxes[i] = {};
    rows[i] = {};
    cols[i] = {};
  }
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] !== "") {
        const val = board[r][c];
        const boxId = getBoxId(r, c);
        boxes[boxId][val] = true;
        rows[r][val] = true;
        cols[c][val] = true;
      }
    }
  }
}
function solveBackTrack(board: any[][], boxes, rows, cols, r = 0, c = 0) {
  if (r === board.length || c === board[0].length) return true;
  else {
    if (board[r][c] === "") {
      for (let num = 1; num <= 9; num++) {
        const numVal = num.toLocaleString();
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
          board[r][c] = "";
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
function isValid(box, rows, col, num) {
  if (box[num] || rows[num] || col[num]) return false;
  return true;
}
