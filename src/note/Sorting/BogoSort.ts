/**Bogo Sort or stupid short works by shuffle the array
 * until every num is shorted
 *
 */
export function BogoSort(arr: number[]) {
  while (!Sorted(arr)) {
    arr = shuffle(arr);
  }
  return arr;
}

function shuffle(arr: number[]) {
  let m = arr.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
}
function Sorted(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
}
