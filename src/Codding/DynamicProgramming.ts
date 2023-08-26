/** Dynamic Programming
 *
 */
/**Minimum Cost Of Climbing Stairs & How To Approach DP
 *  For a given staircase, the i-th step ise assigned a
 *  non-negative cost indicated by a cost array
 *
 * Once you pay the cost for step, you can either climb one or
 * two steps . find the minimum cost to reach the tp of the
 * staircase. you first step can either be the first or second
 * step
 */
/** minCostClimbStair
 *  - we define mine function to store all recursive need
 *  - if we only define one recursive function the collection of
 *  - will broken because inconsistency recursive
 *
 */
export const minCostClimbStair = (cost: number[]) => {
  const n = cost.length;
  let seen: Record<number, number> = {};
  return Math.min(minCost(n - 1, cost, seen), minCost(n - 2, cost, seen));
};
export function minCost(
  i: number,
  cost: number[],
  seen: Record<number, number> = {}
): number {
  if (i < 0 || !cost.length) return 0;
  if (i === 0 || i === 1) return cost[i];
  if (seen[i] !== undefined) return seen[i];
  seen[i] =
    cost[i] + Math.min(minCost(i - 1, cost, seen), minCost(i - 2, cost, seen));
  //   console.log(i);

  return seen[i];
}
/** Bottom Up (Tabulation)
 *
 */
export function minCostClimbStairSecond(cost: number[]) {
  if (cost.length === 0) return 0;
  if (cost.length === 1) return cost[0];
  let dpOne = cost[0];
  let dpTwo = cost[1];
  for (let i = 2; i < cost.length; i++) {
    const current = cost[i] + Math.min(dpOne, dpTwo);
    dpOne = dpTwo;
    dpTwo = current;
  }
  return Math.min(dpOne, dpTwo);
}
/**Knight Probability In Chessboard
 *  On a given n x (n*n) chessboard, a knight piece
 * will start at the r-th row and c-th column. the
 * knight will attempt to make k move
 *
 * A knight can move in 8 possible ways. Each moving
 * will choose one of these 8 at random. the knight
 * continues moving until it finish k move or it move
 * off the chessboard. Return the probability that
 * the knight is on the chessboard after it finish
 * moving
 */
const knightMove = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];
export function knightProbability(
  n: number,
  k: number,
  r: number,
  c: number
): number {
  if (r < 0 || r >= n || c < 0 || c >= n) return 0;
  if (k === 0) return 1;
  let res = 0;
  for (let i = 0; i < knightMove.length; i++) {
    const dir = knightMove[i];
    res += knightProbability(n, k - 1, r + dir[0], c + dir[1]) / 8;
  }
  return res;
}
/**knightProbabilitySecond
 *  with memoization
 */
export function knightProbabilitySecond(
  n: number,
  k: number,
  r: number,
  c: number
) {
  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(undefined)));
  return recursiveKnight(n, k, r, c, dp);
}

function recursiveKnight(
  n: number,
  k: number,
  r: number,
  c: number,
  dp: any[][][]
): number {
  if (r < 0 || r >= n || c < 0 || c >= n) return 0;
  if (k === 0) return 1;
  if (dp[k][r][c] !== undefined) return dp[k][r][c];
  let res = 0;
  for (let i = 0; i < knightMove.length; i++) {
    const dir = knightMove[i];
    res += recursiveKnight(n, k - 1, r + dir[0], c + dir[1], dp) / 8;
  }
  dp[k][r][c] = res;
  return dp[k][r][c];
}
/** Knight tabulations
 *
 */
export function knightProbabilityThird(
  n: number,
  k: number,
  r: number,
  c: number
) {
  let prevDp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let currDp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  prevDp[0][r][c] = 1;
  for (let step = 1; step <= k; step++) {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < c; col++) {
        for (let i = 0; i < knightMove.length; i++) {
          const dir = knightMove[i];
          const prevRow = row + dir[0];
          const prevCol = col + dir[1];
          if (prevRow >= 0 && prevRow < n && prevCol >= 0 && prevCol < n) {
            currDp[row][col] += prevDp[prevRow][prevCol] / 8;
          }
        }
      }
    }
    prevDp = currDp;
    currDp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res += prevDp[i][j];
    }
  }
  return res;
}
