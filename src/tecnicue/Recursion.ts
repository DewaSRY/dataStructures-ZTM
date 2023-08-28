/** Recursion
 * what is Recursion ?
 * Recursion is a process that calls itself
 */
/**How recursive function works
 * Invoke the same function with a different input
 * until you reach your base case
 */
export function factorial(num: number): number {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}
export function collectOddsNum(arr: number[], newArr: number[] = []) {
  if (arr.length === 0) return newArr;
  let num = arr.shift()!;
  if (num % 2 !== 0) newArr.push(num);
  collectOddsNum(arr, newArr);
  return newArr;
}
export function collectOddValues(arr: number[], newArr: number[] = []) {
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  collectOddValues(arr.slice(1), newArr);
  return newArr;
}
export function power(num: number, pow: number): number {
  if (pow === 0) return 1;
  return num * power(num, pow - 1);
}
export function productOfArray(arr: number[]): number {
  let result: number = 1;
  if (arr.length === 0) return result;
  result *= productOfArray(arr.slice(1));
  return result * arr[0];
}

export function recursiveRange(num: number): number {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
export function fib(n: number, memo: number[] = []): number {
  if (n <= 2) return 1;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1) + fib(n - 2);
  return memo[n];
}
export function reverse(str: string): string {
  if (str.length <= 1) return str[0];
  return reverse(str.slice(1)) + str[0];
}
/** Dynamic Programming
 *  A method for solving a complex problem by breaking it down
 * into a collection of simpler subproblem, solving each of
 * thous subproblem just once, and sorting their solutions
 *
 */
export function fibOne(n: number, memo: number[] = []): number {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fibOne(n - 1, memo) + fibOne(n - 2, memo);
  memo[n] = res;
  return res;
}
export function FibSecond(n: number, fibNum: number[]) {
  if (n < -2) return 1;
  for (let num = 3; num <= n; num++) {
    fibNum[num] = fibNum[num - 1] + fibNum[num - 2];
  }
  return fibNum[n];
}
