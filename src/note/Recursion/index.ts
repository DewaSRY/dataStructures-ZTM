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
export function collectOddsNum(arr: number[]) {
  let newArr: number[] = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr.concat(collectOddsNum(arr.slice(1)));
  return newArr;
}
export function collectOddValues(arr: number[]) {
  let newArr: number[] = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
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
export function fib(n: number): number {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
export function reverse(str: string): string {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
