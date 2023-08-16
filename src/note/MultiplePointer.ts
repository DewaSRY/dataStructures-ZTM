/** Multiple Pointers
 * Creating pointer or values that correspond to an index or
 * position adn move towards the beginning, and or middle
 * based on a certain condition
 * it's very efficient for solving problems with minimal space complexity as well
 */
/** sumZero
 * make function that can receive the array of number then
 * looking the match can sum to zero
 */
export function sumZero(arr: number[]) {
  let leftP = 0;
  let rightP = arr.length - 1;
  while (leftP < rightP) {
    let sum = arr[leftP] + arr[rightP];
    if (sum === 0) return [arr[leftP], arr[rightP]];
    else if (sum > 0) rightP--;
    else leftP++;
  }
  return false;
}
/** Count Unique values
 * Implement a function called cont Unique values,
 * Which accepts a sorted array, and const the unique
 * values in the array. there can e negative numbers
 * in the array but it will always be stored
 */
export function countUniqueValues(arr: number[]) {
  if (!arr) return 0;
  let leftP = 0;
  let rightP = arr.length - 1;
  let numMap: { [key: number]: number } = {};
  while (leftP < rightP) {
    if (leftP !== rightP) {
      numMap[arr[leftP]] ? (numMap[arr[leftP]] += 1) : (numMap[arr[leftP]] = 1);
      numMap[arr[rightP]]
        ? (numMap[arr[rightP]] += 1)
        : (numMap[arr[rightP]] = 1);
    } else if (arr[leftP] === arr[rightP]) {
      numMap[arr[leftP]] ? (numMap[arr[leftP]] += 1) : (numMap[arr[leftP]] = 1);
    }
    leftP++;
    rightP--;
  }
  return Object.keys(numMap).length;
}
/**countUniqueValuesTwo
 *
 */
