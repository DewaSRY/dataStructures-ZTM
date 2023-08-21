/**
Given an Array of integer, return the 
incase of the two number that add up to given target.
//test case
->Are the number positive or can be negative=>All number positive
->Are there duplicate number=> No,only uniq character
->What do we return if there's no solution=>Just return null
->Will there always be solution available=>Yes there is
->Can there be multiple pairs thar add up to the target=>No there is only one
 */
export function twoSum(arr: number[], target: number) {
  if (arr.length <= 1) return null;
  for (let idx = 0; idx < arr.length; idx++) {
    for (let nxt = 0; nxt < arr.length; nxt++) {
      if (idx !== nxt + 1 && arr[idx] + arr[nxt + 1] === target) {
        // console.log(arr[idx], arr[nxt + 1]);
        return [idx, nxt + 1];
      }
    }
  }
  return null;
}
export function twoSumSecond(arr: number[], target: number) {
  if (arr.length <= 1) return null;
  for (let idx = 0; idx < arr.length; idx++) {
    const numberToFind = target - arr[idx];
    for (let nxt = 1; nxt < arr.length; nxt++) {
      if (idx !== nxt && numberToFind == arr[nxt]) {
        return [idx, nxt];
      }
    }
  }
  return null;
}
export function twoSumThird(num: number[], target: number) {
  if (num.length <= 1) return null;
  const numbMap: { [k: number]: number } = {};
  for (let p = 0; p < num.length; p++) {
    const currentMapVal = numbMap[num[p]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - num[p];
      numbMap[numberToFind] = p;
    }
  }
  return null;
}
