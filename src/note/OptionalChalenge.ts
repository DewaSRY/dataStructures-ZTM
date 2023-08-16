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
    console.log(average);
    if (average < num) leftP++;
    if (average > num) rightP--;
    if (average === num) return true;
  }
  return false;
}
