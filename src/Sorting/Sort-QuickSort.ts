interface Swap {
  arr: number[];
  left: number;
  right: number;
}
function swap(swap: Swap) {
  const { arr, left, right } = swap;
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
interface Partition extends Swap {
  pivot: number;
}
export function quickSort(sort: Swap) {
  const { arr, left, right } = sort;
  // const {length} = arr;
  let pivot: number;
  let partitionIndex: number;

  if (left < right) {
    pivot = right;
    partitionIndex = partition({ arr, pivot, left, right });
    //sort left and right
    quickSort({ arr, left, right: partitionIndex - 1 });
    quickSort({ arr, left: partitionIndex + 1, right });
  }
  return arr;
}

function partition(value: Partition) {
  const { arr, pivot, left, right } = value;
  let pivotValue = arr[pivot];
  let partitionIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap({ arr: arr, left: i, right: partitionIndex });
      partitionIndex++;
    }
  }
  swap({ arr: arr, left: right, right: partitionIndex });
  return partitionIndex;
}

//Select first and last index as 2nd and 3rd parameters
// quickSort(numbers, 0, numbers.length - 1);
// console.log(numbers);
