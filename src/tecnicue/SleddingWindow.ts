/** Sliding Window
 * This pattern involves crating a window which can either be
 * an array or number from one position to another
 * depending on a certain condition, the window either
 * increases or closes (and o new window is created)
 * Very useful for keeping track of subset of data in an
 * array string etc
 */
/** An Example
 * Write a function called maxSubarraySum which accepts an
 * array of integers and a number called n. the function should
 * calculate the maximum sum of the n consecutive elements in
 * the array
 */
/** maxSubarraySum
 * 1 we define teh max num variable left window variable and right window variable
 * 2. window have length equal withe N
 * 3. we build while looping to loop until the window scope all the posable sum value
 * 4 we define the sumNumber variable to put all the sum of number inside the window
 * 5 if the sumNumber is greater then then we put the sumNumber on the maxNum
 */
export function maxSubarraySum(arr: number[], n: number) {
  if (!arr.length) return null;
  let maxNum = 0;
  let leftWindow = 0;
  let rightWindow = n;
  while (rightWindow <= arr.length) {
    let sumNumber = 0;
    for (let indx = leftWindow; indx < rightWindow; indx++) {
      sumNumber += arr[indx];
    }
    if (maxNum < sumNumber) {
      maxNum = sumNumber;
    }
    leftWindow++;
    rightWindow++;
    sumNumber = 0;
  }
  return maxNum;
}
export function maxSubarraySumTwo(arr: number[], n: number) {
  if (n > arr.length) return null;
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sumNum = 0;
    for (let j = 0; j < n; j++) {
      sumNum += arr[i + j];
    }
    if (sumNum > maxNum) maxNum = sumNum;
  }
  return maxNum;
}
/** maxSubArraySumThree
 * 1 define maxSum and window variable
 * 2 iterate first sum of window and define it as the first max sum
 * 3 build second loop where we subtract the left val the window
 *   and change add it withe the right plus one index value,the
 *   window we slide by change teh left value withe new right
 *   value
 * 4 if there are the bigger sumNumber of window then the maxSum
 *   maxSum equal the window
 * 5 return the maxSum
 *
 */
export function maxSubArraySumThree(arr: number[], n: number) {
  let maxSum = 0;
  let window = 0;
  if (n > arr.length) return null;
  for (let indx = 0; indx < n; indx++) {
    window += arr[indx];
  }
  maxSum = window;
  for (let indx = n; indx < arr.length; indx++) {
    window = window - arr[indx - n] + arr[indx];
    if (window > maxSum) maxSum = window;
  }
  return maxSum;
}
