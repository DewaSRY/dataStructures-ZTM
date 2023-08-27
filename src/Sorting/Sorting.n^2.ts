/**bubbleSort
 * short ting by compare each value one by one
 */
export function bubbleSort(arr: number[]) {
  const { length } = arr;
  let noSwaps: boolean;
  for (let i = 0; i < length; i++) {
    noSwaps = true;
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
/**Selection Sort
 * Similar to bubble sort, but instead of first placing large
 * values into sorted position, it places small values into
 * sorted position
 */

/** Selection Sort works by look for the smaller
 *  number then put it on direct left to right
 */
export function SelectionSort(arr: number[]) {
  for (let leftP = 0; leftP < arr.length; leftP++) {
    let minNum = leftP;
    for (let rightP = leftP + 1; rightP < arr.length; rightP++) {
      if (arr[rightP] < arr[minNum]) {
        minNum = rightP;
      }
      [arr[leftP], arr[minNum]] = [arr[minNum], arr[leftP]];
    }
  }
  return arr;
}

/**Inserting sort
 * it's work by make two pointer the first for separate
 * the small on the left then the other to pick num on the
 * right side then compare it with left side, if the right
 *  is smaller its get put on the left side
 */
/**Insertion Shorting Pseudocode
 * -Start by picking the second element in the array
 * -now compare the second with the one before it and swap if
 *  necessary
 * -continue to the next element and if it is the incorrect
 *  order, iterate through the sorted portion (i,e the left side)
 *  to place the element in the correct place
 *
 */
export function InsertionSor(arr: number[]) {
  for (let leftP = 1; leftP < arr.length; leftP++) {
    let current = arr[leftP];
    let rightP = leftP - 1;
    while (rightP > -1 && current < arr[rightP]) {
      arr[rightP + 1] = arr[rightP];
      rightP--;
    }
    arr[rightP + 1] = current;
  }
  return arr;
}
