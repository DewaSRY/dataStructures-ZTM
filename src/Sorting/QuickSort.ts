/** QUick Sort
 * - Like merge sort, exploits the fact that arrays of 0 or 1
 *   element are always sorted
 * - Works by selecting on element (called the "pivot") and
 *   finding the index where the pivot should end up in the sorted array
 * - Once the pivot is position appropriately, quick sort
 * can be applied on either side of the pivot
 */
/**Quic short works by split the array by two with
 * the pivot number we choice on the right, the separation works
 * by compare the number smaller then the pivot and move it on
 * the left again and again with the pivot get smaller chunk
 *
 * we build the function call partition use to look the
 *  right position of pivot and move the smaller number then the
 * pivot value to the left, after the calculation the function
 * return the pivotValue index as return
 *
 * the partition function return use as reverence to separate
 * the smaller chunk of array part, the repetition works until
 * the index of leftP is greater or equal with rightP
 */
export function quickSort(
  arr: number[],
  leftP = 0,
  rightP = arr.length - 1
): number[] {
  let pivotIndex: number;
  if (leftP < rightP) {
    pivotIndex = partition(arr, leftP, rightP);
    quickSort(arr, leftP, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, rightP);
  }
  return arr;
}
function partition(arr: number[], leftP: number, rightP: number) {
  let pivotNum = arr[rightP];
  let parTitionIndx = leftP;
  for (let indx = leftP; indx < rightP; indx++) {
    if (arr[indx] < pivotNum) {
      [arr[indx], arr[parTitionIndx]] = [arr[parTitionIndx], arr[indx]];
      parTitionIndx++;
    }
  }
  [arr[rightP], arr[parTitionIndx]] = [arr[parTitionIndx], arr[rightP]];
  return parTitionIndx;
}
export function quickSortSecond(
  arr: number[],
  leftP = 0,
  rightP = arr.length - 1
) {
  let partitionIndex: number;
  if (leftP < rightP) {
    partitionIndex = partitionSecond(arr, leftP, rightP);
    quickSortSecond(arr, leftP, partitionIndex - 1);
    quickSortSecond(arr, partitionIndex + 1, rightP);
  }
  return arr;
}
function partitionSecond(arr: number[], leftP: number, rightP: number) {
  let pivotNum = arr[rightP];
  let partitionIndex = leftP;
  for (let indx = leftP; indx < rightP; indx++) {
    if (arr[indx] < pivotNum) {
      [arr[indx], arr[partitionIndex]] = [arr[partitionIndex], arr[indx]];
      partitionIndex++;
    }
  }
  [arr[rightP], arr[partitionIndex]] = [arr[partitionIndex], arr[rightP]];

  return partitionIndex;
}
