/**Marge Sort
 *- it's a combination of two things- merging and sorting
 *- Exploits the fact that arrays of 0 or 1 element are always sorted
 */
/**Merge Sort
 * 1. make marge function which the function to split the
 *    array on the middle to two array
 * 2. make the base line is the array of one length and
 *    return the array it's self
 * 3. make the function to sort the array was merge
 * 4. return the Marge function how receive the first function as
 *    argument ho split the array on the middle until be array
 *    with one element
 * 5. marge sort return the concat of the two array side by side
 *    so every element really get marge
 */

export function MargeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let leftPiece = arr.slice(0, middleIndex);
  let rightPiece = arr.slice(middleIndex);

  return Marge(MargeSort(leftPiece), MargeSort(rightPiece));
}
/** Marge
 * Marge works by receive two array how assume already be
 * sorted then sort them by compering the each first index
 * and store it on the result array, then after the avery
 * index equal withe the length each index the loop get stope
 * and return the concat of every side array
 *
 */
function Marge(leftArr: number[], rightArr: number[]) {
  let result = [];
  let leftP = 0;
  let rightP = 0;
  while (leftP < leftArr.length && rightP < rightArr.length) {
    if (leftArr[leftP] < rightArr[rightP]) {
      result.push(leftArr[leftP]);
      leftP++;
    } else {
      result.push(leftArr[rightP]);
      rightP++;
    }
  }
  return result.concat(leftArr.slice(leftP)).concat(rightArr.slice(rightP));
}

export function MargeSortSecond(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let leftPiece = arr.slice(0, middleIndex);
  let rightPiece = arr.slice(middleIndex);
  return MargeSecond(MargeSortSecond(leftPiece), MargeSortSecond(rightPiece));
}
function MargeSecond(leftArr: number[], rightArr: number[]) {
  let result = [];
  let leftP = 0;
  let rightP = 0;
  while (leftP < leftArr.length && rightP < rightArr.length) {
    if (leftArr[leftP] < rightArr[rightP]) {
      result.push(leftArr[leftP]);
      leftP++;
    } else if (leftArr[leftP] > rightArr[rightP]) {
      result.push(leftArr[rightP]);
      rightP++;
    } else if (leftArr[leftP] === rightArr[rightP]) {
      result.push(leftArr[rightP]);
      result.push(leftArr[leftP]);
      rightP++;
      leftP++;
    }
  }
  return result.concat(rightArr.slice(rightP)).concat(leftArr.slice(leftP));
}
export function MargeSortThird(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let leftPiece = arr.slice(0, middleIndex);
  let rightPiece = arr.slice(middleIndex);
  return MargeThird(MargeSortThird(leftPiece), MargeSortThird(rightPiece));
}
function MargeThird(leftArr: number[], rightArr: number[]) {
  const result = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift() as number);
    } else {
      result.push(rightArr.shift() as number);
    }
  }
  return [...result, ...leftArr, ...rightArr];
}
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
/**RadixSort
 *- Radix sort is a special sorting algorithm that works on
 *  lists of numbers
 *- it  never makes comparison between elements!
 *- it exploits the fact that information about size of
 *  number is encoded in the number of digits
 */
/**
 * ->Radix short works bay make 10 array as the sight of 
 * ten kind of pure number (9-0) to union the number,
 * first we look for the long of digits the num sequence
 * have,  then we make second iteration as long of digits,
 * then we put the number on the match bucked again and again 
 * until all iteration done, 
 * ->if we see the second iteration it iterate the longeNumDigits
 * use to match the bucket and the number the nestled iteration 
 * inside the second iteration use to iterate all number from 
 * array ant put the number on bucket
 *-> the leftPointer use to look the longest digits number
 -> the rightPointer use to put all number to they matcher buckets
 */
export function RadixSort(arr: number[]) {
  let maxLongNum = 0;
  for (let leftP = 0; leftP < arr.length; leftP++) {
    maxLongNum = Math.max(maxLongNum, getNumberOfDigits(arr[leftP]));
  }
  for (let indx = 0; indx < maxLongNum; indx++) {
    let buckets = Array.from({ length: 10 }, () => [] as number[]);
    for (let rightP = 0; rightP < arr.length; rightP++) {
      let digit = getDigit(arr[rightP], indx);
      buckets[digit].push(arr[rightP]);
    }
    arr = [].concat(...(buckets as [][]));
  }
  return arr;
}
function getDigit(num: number, place: number) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}
function getNumberOfDigits(num: number) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
