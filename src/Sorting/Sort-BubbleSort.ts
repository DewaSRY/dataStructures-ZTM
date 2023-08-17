// interface Swap {
//   arr: number[];
//   left: number;
//   right: number;
// }
// function swap(swap: Swap) {
//   const { arr, left, right } = swap;
//   let temp = arr[left];
//   arr[left] = arr[right];
//   arr[right] = temp;
// }
export function bubbleSort(arr: number[]) {
  const { length } = arr;
  let noSwaps: boolean;
  for (let i = 0; i < length; i++) {
    noSwaps = true;
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
