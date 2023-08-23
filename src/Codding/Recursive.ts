/** Recursive
 *  Recursive is a function ho call it self,
 * recursive use on data structure Like
 * ->2-D Array/ matrixes
 * ->Binary Trees
 * ->Heaps
 * ->Graphs
 * Algorithmic approaches
 * -> Sorting
 * ->Greedy method
 * ->Divide and conquer
 * ->Dynamic Programming
 * ->Backtracking
 */
/** Tail Recursive
 * -> it is the method how use to memoization the recursive
 *
 */
export function tailFactorial(x: number, total = 1) {
  if (x === 0) return total;
  else return tailFactorial(x - 1, total * x);
}
/** Kth largest Element
 * Given an unsorted array, return the kth largest
 * element. it is the kth largest element in sorted order, not
 * the kth distinct element
 *
 */

export function quickSort(arr: number[], leftP = 0, rightP = arr.length - 1) {
  if (leftP < rightP) {
    let partitionIndx = partition(arr, leftP, rightP);
    quickSort(arr, partitionIndx + 1, rightP);
    quickSort(arr, leftP, partitionIndx - 1);
  }
  return arr;
}

function partition(arr: number[], leftP: number, rightP: number) {
  let pivotNum = arr[rightP];
  let partition = leftP;
  for (let index = leftP; index < rightP; index++) {
    if (arr[index] < pivotNum) {
      [arr[partition], arr[index]] = [arr[index], arr[partition]];
      partition++;
    }
  }
  [arr[rightP], arr[partition]] = [arr[partition], arr[rightP]];
  return partition;
}
export function KthLargest(arr: number[], num: number) {
  if (arr.length === 1) return arr[0];
  let length = arr.length;
  for (let indx = 1; indx < arr.length; indx++) {
    if (arr[indx - 1] > arr[indx]) {
      arr = quickSort(arr)!;
    }
  }

  return arr[length - num];
}
/** Divide and conquer
 * 1 Multi-branched recursion
 * 2 Breaks a problem into multiple smaller but same sub-problem
 * 3.Combine the solutions of sub-problems into the solution for
 *  the original problem
 *
 */
// const array = [5, 3, 1, 6, 4, 2];
// const kToFind = 4;

const getPartition = function (nums: number[], left: number, right: number) {
  let i = left;
  for (let j = left; j <= right; j++) {
    if (nums[j] <= nums[right]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  return i - 1;
};

const quickSelect = function (
  nums: number[],
  left = 0,
  right = nums.length - 1,
  indexToFind: number
): number {
  const partitionIndex = getPartition(nums, left, right);
  if (partitionIndex === indexToFind) {
    return nums[partitionIndex];
  } else if (indexToFind < partitionIndex) {
    return quickSelect(nums, left, partitionIndex - 1, indexToFind);
  } else {
    return quickSelect(nums, partitionIndex + 1, right, indexToFind);
  }
};

export var findKthLargest = function (nums: number[], k: number) {
  const indexToFind = nums.length - k;
  return quickSelect(nums, 0, nums.length - 1, indexToFind);
};
/** Binary search
 *
 */

export function BinarySearch(arr: number[], num: number) {
  let leftP = 0;
  let rightP = arr.length - 1;
  while (leftP <= rightP) {
    let MiddleIdx = Math.floor((rightP + leftP) / 2);
    let middleNum = arr[MiddleIdx];
    if (middleNum < num) leftP = MiddleIdx + 1;
    if (middleNum > num) rightP = MiddleIdx - 1;
    if (middleNum == num) return [leftP, rightP];
  }
  return -1;
}
/** Start and end of target in a sorted array
 *  Given an array of integer sorted in ascending order, return
 *  the string an ending index of a given target value in an
 *  array, i,e [x,y]
 *  -> first we step we looking for the middle index, then we
 *  -> divide the array by the index target we get before to be
 *  right side and left side
 */
const binarySearch = (
  nums: number[],
  left: number,
  right: number,
  target: number
) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = nums[mid];
    if (foundVal === target) {
      return mid;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
export const searchRange = function (nums: number[], target: number) {
  if (nums.length < 1) return [-1, -1];
  const firstPos = binarySearch(nums, 0, nums.length - 1, target);
  if (firstPos === -1) return [-1, -1];
  let endPos = firstPos,
    startPos = firstPos,
    temp1: number = 0,
    temp2: number = 0;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  startPos = temp1;
  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = temp2;
  return [startPos, endPos];
};
