/**Marge Sort
 *- it's a combination of two things- merging and sorting
 *- Exploits the fact that arrays of 0 or 1 element are always sorted
 */
/**Merge Sort
 * 1. make marge function which the function to split the
 *    array on the middle to two array
 * 2. make the base line is the array of one length and
 *    return the array it's self
 * 3. make the function to sort the array was merge
 * 4. return the Marge function how receive the first function as
 *    argument ho split the array on the middle until be array
 *    with one element
 * 5. marge sort return the concat of the two array side by side
 *    so every element really get marge
 */

export function MargeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let leftPiece = arr.slice(0, middleIndex);
  let rightPiece = arr.slice(middleIndex);

  return Marge(MargeSort(leftPiece), MargeSort(rightPiece));
}
/** Marge
 * Marge works by receive two array how assume already be
 * sorted then sort them by compering the each first index
 * and store it on the result array, then after the avery
 * index equal withe the length each index the loop get stope
 * and return the concat of every side array
 *
 */
function Marge(leftArr: number[], rightArr: number[]) {
  let result = [];
  let leftP = 0;
  let rightP = 0;
  while (leftP < leftArr.length && rightP < rightArr.length) {
    if (leftArr[leftP] < rightArr[rightP]) {
      result.push(leftArr[leftP]);
      leftP++;
    } else {
      result.push(leftArr[rightP]);
      rightP++;
    }
  }
  return result.concat(leftArr.slice(leftP)).concat(rightArr.slice(rightP));
}

export function MargeSortSecond(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let leftPiece = arr.slice(0, middleIndex);
  let rightPiece = arr.slice(middleIndex);
  return MargeSecond(MargeSortSecond(leftPiece), MargeSortSecond(rightPiece));
}
function MargeSecond(leftArr: number[], rightArr: number[]) {
  let result = [];
  let leftP = 0;
  let rightP = 0;
  while (leftP < leftArr.length && rightP < rightArr.length) {
    if (leftArr[leftP] < rightArr[rightP]) {
      result.push(leftArr[leftP]);
      leftP++;
    } else if (leftArr[leftP] > rightArr[rightP]) {
      result.push(leftArr[rightP]);
      rightP++;
    } else if (leftArr[leftP] === rightArr[rightP]) {
      result.push(leftArr[rightP]);
      result.push(leftArr[leftP]);
      rightP++;
      leftP++;
    }
  }
  return result.concat(rightArr.slice(rightP)).concat(leftArr.slice(leftP));
}
export function MargeSortThird(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let leftPiece = arr.slice(0, middleIndex);
  let rightPiece = arr.slice(middleIndex);
  return MargeThird(MargeSortThird(leftPiece), MargeSortThird(rightPiece));
}
function MargeThird(leftArr: number[], rightArr: number[]) {
  const result = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift() as number);
    } else {
      result.push(rightArr.shift() as number);
    }
  }
  return [...result, ...leftArr, ...rightArr];
}
