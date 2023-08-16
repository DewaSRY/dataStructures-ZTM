export const fibonacciIterative = (n: number) => {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};
export const fibonacciRecursive = (num: number): number => {
  if (num < 2) return num;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
};
