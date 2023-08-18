/**Frequency Counter - sameFrequency
 * Write a function called sameFrequency.
 *  Given two positive integers, find out
 * if the two numbers have the same frequency of digits.
 */
export function sameFrequency(numOne: number, numTwo: number) {
  const strNumOne = numOne.toLocaleString();
  const strNumTwo = numTwo.toLocaleString();
  if (strNumOne.length !== strNumTwo.length) return false;
  const mapNum: { [key: number]: number } = {};
  for (let num of strNumOne) {
    mapNum[Number(num)]
      ? (mapNum[Number(num)] += 1)
      : (mapNum[Number(num)] = 1);
  }
  for (let sNum of strNumTwo) {
    if (!mapNum[Number(sNum)]) return false;
    else mapNum[Number(sNum)] -= 1;
  }
  return true;
}
/**Frequency Counter / Multiple Pointers - areThereDuplicates
 * Implement a function called, areThereDuplicates which
 * accepts a variable number of arguments, and checks whether
 * there are any duplicates among the arguments passed in.
 */
export function areThereDuplicates(...arg: any) {
  let stringArgument = arg;
  if (typeof stringArgument[0] === "string" && stringArgument.length === 1) {
    stringArgument = stringArgument[0];
  }
  if (!stringArgument.length) return false;
  let mapChar: { [key: string]: true } = {};
  for (let char of stringArgument) {
    if (!mapChar[char]) {
      mapChar[char] = true;
    } else {
      return true;
    }
  }
  return false;
}
/**Multiple Pointers - averagePair
 * Write a function called averagePair. Given a sorted array
 * of integers and a target average, determine if there is a
 *  pair of values in the array where the average of the pair
 * equals the target average. There may be more than one pair
 * that matches the average target.
 */
export function averagePair(arr: number[], num: number) {
  let leftP = 0;
  let rightP = arr.length - 1;
  while (leftP < rightP) {
    let average = (arr[leftP] + arr[rightP]) / 2;
    if (average < num) leftP++;
    if (average > num) rightP--;
    if (average === num) return true;
  }
  return false;
}
/**Multiple Pointers - isSubsequence
 * Write a function called isSubsequence which takes
 *  in two strings and checks whether the characters in
 *  the first string form a subsequence of the characters
 *  in the second string. In other words, the function should
 *  check whether the characters in the first string appear
 * somewhere in the second string,
 */
export function isSubsequence(sub: string, str: string) {
  var pointerOne = 0;
  var pointerTwo = 0;
  if (!sub) return true;
  if (!str) return false;
  while (pointerTwo < str.length) {
    if (str[pointerTwo] === sub[pointerOne]) pointerOne++;
    if (pointerOne === sub.length) return true;
    pointerTwo++;
  }
  return false;
}
/** Sliding Window - maxSubarraySum
 * Given an array of integers and a number, write a function
 * called maxSubarraySum, which finds the maximum sum of a
 * subarray with the length of the number passed to the function.
 */
export function maxSubarraySum(arr: number[], num: number) {
  let maxSum = 0;
  let window = 0;
  for (let idx = 0; idx < num; idx++) {
    window += arr[idx];
  }
  maxSum = window;
  for (let indx = num; indx < arr.length; indx++) {
    window = window - arr[indx - num] + arr[indx];
    if (window > maxSum) maxSum = window;
  }
  return maxSum;
}
/**Sliding Window - minSubArrayLen
 * Write a function called minSubArrayLen which accepts
 * two parameters - an array of positive integers and a
 * positive integer.
 * This function should return the minimal length of a
 * contiguous subarray of which the sum is greater than
 * or equal to the integer passed to the function. If there
 * isn't one, return 0 instead.
 */
export function minSubArrayLen(arr: number[], sum: number) {
  let total = 0;
  let leftPointer = 0;
  let rightPointer = 0;
  let minLen = Infinity;
  while (leftPointer < arr.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && rightPointer < arr.length) {
      total += arr[rightPointer];
      rightPointer++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, rightPointer - leftPointer);
      total -= arr[leftPointer];
      leftPointer++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
/**Sliding Window - findLongestSubstring
 * Write a function called findLongestSubstring, which accepts
 * a string and returns the length of the longest substring with
 * all distinct characters.
 */
export function findLongestSubstring(str: string) {
  if (str.length <= 1) return 0;
  const seen: { [k: string]: number } = {};
  let left = 0;
  let longest = 0;
  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right];
    const previouslySeenChar = seen[currentChar];
    if (previouslySeenChar >= left) {
      left = previouslySeenChar + 1;
    }
    seen[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}
export function findLongestSubstringSecond(str: string) {
  let longest = 0;
  const seen: { [k: string]: number } = {};
  let leftP = 0;

  for (let rightP = 0; rightP < str.length; rightP++) {
    let char = str[rightP];
    if (seen[char]) {
      leftP = Math.max(leftP, seen[char]);
    }
    // index - beginning of substring + 1
    //(to include current in count)
    longest = Math.max(longest, leftP - leftP + 1);
    // store the index of the next char so as to not
    //double count
    seen[char] = rightP + 1;
  }
  return longest;
}
