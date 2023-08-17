/** Divide and Conquer
 * This is pattern involves dividing a data set into smaller
 * chunks and then repeating a process with a subset of data
 * This pattern can tremendously decrees time complexity
 */
/** An Example
 * Given a sorted array of integers, write a function called
 * search, that accepts a value and returns the index where
 * the values passed to the function is located . if the values
 * in not found, return -1
 */
export function search(arr: number[], val: number) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    // let currentElement = arr[middle];
    if (arr[middle] < val) min = middle + 1;
    else if (arr[middle] > val) max = middle - 1;
    else if (arr[middle] === val) return middle;
  }
  return -1;
}

export function BinarySearch(arr: number[], num: number) {
  let leftP = 0;
  let rightP = arr.length - 1;
  while (leftP <= rightP) {
    let MiddleIdx = Math.floor((rightP + leftP) / 2);
    let middleNum = arr[MiddleIdx];
    if (middleNum < num) leftP = MiddleIdx + 1;
    if (middleNum > num) rightP = MiddleIdx - 1;
    if (middleNum == num) return MiddleIdx;
  }
  return -1;
}
