/**Two Sum
 * Given an Array of integers, return the indices of two number
 * that add up to a given target.
 * => more explanation
 * ->
 */
/**TwoSumNum
 * - store res number and index to get teh target number
 * - if teh next number res num exist return the index
 * - else return null
 */
export function TwoSumNum(arr: number[], target: number) {
  let resMap: Record<number, number> = {};
  for (let indx = 0; indx < arr.length; indx++) {
    if (resMap[arr[indx]] >= 0) {
      return [resMap[arr[indx]], indx];
    } else {
      let resNumber = target - arr[indx];
      resMap[resNumber] = indx;
    }
  }
}
/**Container With Most water
 * You given an array of positive integers where each integer
 * represent the height of vertical line on a character .
 * find two lines which together with teh x-axis from a
 * container that would hold the greatest amount of water.
 * return the area of water it would hold
 */
/** WaterContainer
 * - find the water are which hight * width
 * - look use the second hight line * longest distance index
 */

export function WaterContainer(arr: number[]) {
  if (!arr.length) return 0;
  let leftP = 0;
  let rightP = arr.length - 1;
  let mostsWater: number = 0;
  let waterBaseLine;
  while (leftP < rightP) {
    if (arr[leftP] > arr[rightP]) {
      waterBaseLine = arr[rightP];
      rightP--;
    } else {
      waterBaseLine = arr[leftP];
      leftP++;
    }
    let container = waterBaseLine * rightP;
    if (container > mostsWater) {
      mostsWater = container;
    }
  }
  return mostsWater;
}
