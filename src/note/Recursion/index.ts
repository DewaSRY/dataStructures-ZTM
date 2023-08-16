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
