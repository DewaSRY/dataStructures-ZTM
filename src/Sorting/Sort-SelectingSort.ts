/**
 * selection sort is the sorting algorithms where we
 * make two loop for looking the small number first then
 * put the small one to the first then sho on
 *
 */
export function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
