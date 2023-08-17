/**Selection Sort
 * Similar to bubble sort, but instead of first placing large
 * values into sorted position, it places small values into
 * sorted position
 */

export function SelectionSortSecond(arr: number[]) {
  let leftP = 0;
  let rightP = 1;
  let mindNum = arr[0];

  while (rightP <= arr.length - 1) {
    if (arr[rightP] < mindNum) {
      mindNum = arr[rightP];
      arr[rightP] = arr[leftP];
      arr[leftP] = mindNum;
      leftP++;
      rightP = leftP + 1;
    }
    if (arr[leftP] == arr[rightP]) {
      leftP += 2;
    }
    rightP++;
  }
  return arr;
}
export function SelectionSort(arr: number[]) {
  for (let leftP = 0; leftP < arr.length; leftP++) {
    let min = leftP;
    let temp = arr[leftP];
    for (let rightP = leftP + 1; rightP < arr.length - 1; rightP++) {
      if (arr[leftP] < arr[min]) {
        min = rightP;
      }
    }
    arr[leftP] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
/** Selection Sort works by look for the smaller
 *  number then put it on direct left to right
 */
export function SelectionSortThird(arr: number[]) {
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
