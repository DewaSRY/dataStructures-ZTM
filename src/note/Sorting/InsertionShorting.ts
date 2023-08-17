/**Insertion Shorting Pseudocode
 * -Start by picking the second element in the array
 * -now compare the second with the one before it and swap if
 *  necessary
 * -continue to the next element and if it is the incorrect
 *  order, iterate through the sorted portion (i,e the left side)
 *  to place the element in the correct place
 *
 */
export function InsertionSort(arr: number[]) {
  let leftP = 0;
  let rightP = 1;
  let temp = arr[leftP];
  while (rightP < arr.length) {
    for (let indx = 0; indx < leftP; indx++) {
      if (arr[rightP] < arr[leftP]) {
        arr[leftP] = arr[rightP];
        arr[rightP] = temp;
        leftP++;
      }
    }
    rightP++;
  }
  return arr;
}
export function InsertionSortSecond(arr: number[]) {
  for (let leftP = 0; leftP < arr.length; leftP++) {
    if (leftP !== 0 && arr[leftP] < arr[0]) {
      arr.unshift(arr.splice(leftP, 1)[0]);
    } else {
      if (arr[leftP] < arr[leftP - 1]) {
        for (var rightP = 1; rightP < leftP; rightP++) {
          if (arr[leftP] >= arr[rightP - 1] && arr[leftP] < arr[rightP]) {
            arr.splice(rightP, 0, arr.splice(leftP, 1)[0]);
          }
        }
      }
    }
  }
  return arr;
}
export function InsertionSortThree(arr: number[]) {
  let currentVal;
  for (let leftP = 1; leftP < arr.length; leftP++) {
    currentVal = arr[leftP];
    for (
      let rightP = leftP - 1;
      rightP >= 0 && arr[rightP] > currentVal;
      rightP--
    ) {
      arr[rightP + 1] = arr[rightP];
      arr[rightP + 1] = currentVal;
    }
  }
  return arr;
}
