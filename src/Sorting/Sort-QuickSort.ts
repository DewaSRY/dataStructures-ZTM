interface Swap {
  arr: number[];
  left: number;
  right: number;
}

interface Partition extends Swap {
  pivot: number;
}
export function quickSort(sort: Swap) {
  const { arr, left, right } = sort;
  let pivot: number;
  let partitionIndex: number;
  if (left < right) {
    pivot = right;
    partitionIndex = partition({ arr, pivot, left, right });
    quickSort({ arr, left, right: partitionIndex - 1 });
    quickSort({ arr, left: partitionIndex + 1, right });
  }
  console.log(arr);
  return arr;
}

function partition({ arr, pivot, left, right }: Partition) {
  let pivotValue = arr[pivot];
  let partitionIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      let temp = arr[i];
      arr[i] = arr[partitionIndex];
      arr[partitionIndex] = temp;
      partitionIndex++;
    }
  }
  let temp = arr[left];
  arr[left] = arr[partitionIndex];
  arr[partitionIndex] = temp;
  return partitionIndex;
}

export function quickSortSecond(arr: number[], leftP = 0, rightP = arr.length) {
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
      let temp = arr[indx];
      arr[indx] = arr[partitionIndex];
      arr[partitionIndex] = temp;
      partitionIndex++;
    }
  }
  let temp = arr[leftP];
  arr[leftP] = arr[partitionIndex];
  arr[partitionIndex] = temp;
  return partitionIndex;
}

//Select first and last index as 2nd and 3rd parameters
// quickSort(numbers, 0, numbers.length - 1);
// console.log(numbers);
