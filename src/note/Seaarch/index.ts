/**Linear search
 * Linear search is the way we loop for all sequence data
 * then return the match one
 */
/**Binary Search
 * -Binary search is much fester from of search
 * -Rather then eliminating one element ar a time you can eliminate
 *  half of the remaining elements at time
 * -Binary search only woks on sorted arrays
 */
export function BinarySearch(arr: number[], num: number) {
  let leftP = 0;
  let rightP = arr.length - 1;
  while (leftP <= rightP) {
    let MiddleIdx = Math.floor((rightP - leftP) / 2);
    let middleNum = arr[MiddleIdx];
    if (middleNum < num) leftP = MiddleIdx + 1;
    else if (middleNum > num) rightP = MiddleIdx - 1;
    else if (middleNum == num) return MiddleIdx;
  }
  return -1;
}
export function SearchString(str: string, sub: string) {
  let leftP = 0;
  let rightP = 0;
  while (rightP <= str.length - 1) {
    if (sub[leftP] === str[rightP]) leftP++;
    if (leftP === sub.length) return true;
    rightP++;
  }
  return false;
}
