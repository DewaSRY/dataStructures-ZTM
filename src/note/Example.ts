/** cartCount
 * 1 make map to store the char and the numb
 * 2 make loops to iterate every car on the string
 * 3 if the num already on the map number add one
 * 4 else ad the chart on the map and put one
 */
// the regex parser
export function cartCount(str: string) {
  let map: { [key: string]: number } = {};
  const string = str.trim().toLocaleLowerCase();
  for (let i of string) {
    if (/[a-z0-9]/.test(i)) {
      map[i] = ++map[i] || 1;
    }
  }
  return map;
}
export function cartCountWithAlphaNumeric(str: string) {
  let map: { [key: string]: number } = {};
  const string = str.trim().toLocaleLowerCase();
  for (let i of string) {
    if (isAlphaNumeric(i)) {
      map[i] = ++map[i] || 1;
    }
  }
  return map;
}
function isAlphaNumeric(car: string) {
  const code = car.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric(0-9)
    !(code > 64 && code < 91) && //upper alpha(A-Z)
    !(code > 96 && code < 123) //lower alpha (a-z)
  )
    return false;
  return true;
}
/**Frequency Counter
 * This pattern uses object or sets to collect values / frequency of values
 * This can often avoid the need for nested loops or O(N^2)operations
 * With arrays / string
 */
//example
/**
 * Write a function called same, which accepts two array
 * The function should return true if every value in the array has
 * it's corresponding value squared in the second array.
 * the frequency values must be the same
 */
/** Same function
 * 1 iterated first array withe the frequency as the value
 * 2 iterated second array withe the frequency as the value
 * 3 if there is un match key and the frequency return false
 * 4 if all num in arrayTwo is the square map of the arrayOne return true
 */
export function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) return false;
  const squareMapOne: { [key: number]: number } = {};
  const squareMapTwo: { [key: number]: number } = {};
  for (let num of arr1) {
    if (squareMapOne[num ** 2]) {
      squareMapOne[num ** 2] += 1;
    } else {
      squareMapOne[num ** 2] = 1;
    }
  }
  for (let num of arr2) {
    if (squareMapTwo[num]) {
      squareMapTwo[num] += 1;
    } else {
      squareMapTwo[num] = 1;
    }
  }
  for (let key in squareMapOne) {
    if (squareMapTwo[key] !== squareMapOne[key]) {
      return false;
    }
  }
  return true;
}
/** sameTwo
 * 1 iterated number on array one
 * 2 looking for existing square number from array one on the array two
 * 3 if there is no square value found return false
 * 4 if there is match value remove the match value
 * 5 loop the number until all number get match then return true
 */
export function sameTwo(arrOne: number[], arrTwo: number[]) {
  if (arrOne.length !== arrTwo.length) return false;
  for (let num of arrOne) {
    let correctIndex = arrTwo.lastIndexOf(num ** 2);
    if (correctIndex === -1) return false;
    arrTwo.splice(correctIndex, 1);
  }
  return true;
}
/**ANAGRAMS
 * Given two string, write a function to determine if the second
 * is an anagram of the first, An anagram is a world,phrase or
 * name formed by rearranging the letters of another such
 * as cinema, formed from iceman
 */
export function isAnagram(strOne: string, strTwo: string) {
  if (strOne.length !== strTwo.length) return false;
  const mapOne: { [key: string]: number } = {};
  const mapTWO: { [key: string]: number } = {};

  for (let char of strOne) {
    mapOne[char] ? (mapOne[char] += 1) : (mapOne[char] = 1);
  }
  for (let char of strTwo) {
    mapTWO[char] ? (mapTWO[char] += 1) : (mapTWO[char] = 1);
  }
  for (let key in mapOne) {
    if (mapOne[key] !== mapTWO[key]) return false;
  }
  return true;
}
export function isAnagramTwo(strOne: string, strTwo: string) {
  if (strOne.length !== strTwo.length) return false;
  const mapChar: { [key: string]: number } = {};
  for (let char of strOne) {
    if (mapChar[char]) {
      mapChar[char] += 1;
    } else {
      mapChar[char] = 1;
    }
  }
  for (let char of strTwo) {
    if (!mapChar[char]) return false;
    mapChar[char] -= 1;
  }
  return true;
}
