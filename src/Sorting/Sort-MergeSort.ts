export function mergeSort(array: number[]): number[] {
  if (array.length === 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left: number[], right: number[]) {
  const result = [];
  let leftP = 0;
  let rightP = 0;
  while (leftP < left.length && rightP < right.length) {
    if (left[leftP] < right[rightP]) {
      result.push(left[leftP]);
      leftP++;
    } else {
      result.push(right[rightP]);
      rightP++;
    }
  }
  return result.concat(left.slice(leftP)).concat(right.slice(rightP));
}
