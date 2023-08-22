/** Typed Out string
 *  Given two string S and T, return if they equal when both
 *  are typed out . Any "#" that appears in the string counts
 *  as backspace
 *  which we need return boolean status if the two string given same or not, if there is # count as back space
 */

export function TypedOutString(strOne: string, strTwo: string) {
  let leftP = strOne.length - 1;
  let rightP = strTwo.length - 1;
  while (leftP >= 0 || rightP >= 0) {
    if (strOne[leftP] === "#" || strTwo[rightP] === "#") {
      if (strOne[leftP] === "#") {
        let leftHash = 2;
        while (leftHash > 0) {
          leftP--;
          leftHash--;
          if (strOne[leftP] == "#") leftHash += 2;
        }
      } else if (strTwo[rightP] === "#") {
        let rightHsh = 2;
        while (rightHsh > 0) {
          rightP--;
          rightHsh--;
          if (strTwo[rightP] === "#") rightHsh += 2;
        }
      }
    } else if (strOne[leftP] !== strTwo[rightP]) return false;
    else {
      rightP--;
      leftP--;
    }
  }
  return true;
}
/** Longest substring without repeating character
 *  Given a string, fin the length of the longest substring
 * without repeating characters
 * => additional explanation
 * - substring is separate piece of mine string
 * - subsSequence is the union of char of main string
 * - sensitivity string which status lower case or upper case
 */
/** LongestSubsString
 * - make window , leftWindow and rightWindow
 *   how represent the index
 * - the longest substring get by compare the right
 *   widowIndex - leftWindowIndex+1
 *
 */
export function LongesSubString(str: string) {
  if (!str.length) return 0;
  let seenMap: Record<string, number> = {};
  let leftWindow = 0;
  let LongestString: number = 0;
  for (let rightWindow = 0; rightWindow < str.length; rightWindow++) {
    if (seenMap[str[rightWindow]] >= leftWindow) {
      leftWindow = seenMap[str[rightWindow]] + 1;
    }
    seenMap[str[rightWindow]] = rightWindow;
    LongestString = Math.max(LongestString, rightWindow - leftWindow + 1);
  }
  return LongestString;
}
/** Palindromes
 *  palindromes is a string where read forward equal with
 *  backward
 * -> make function can check the valid palindrome
 */
export function validPalindrome(
  str: string,
  leftP = 0,
  rightP = str.length - 1
) {
  if (str.length <= 1) return true;
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  while (leftP < rightP) {
    if (str[leftP] === str[rightP]) {
      leftP++;
      rightP--;
    } else return false;
  }
  return true;
}
/** almost Palindrome is a
 *
 */
export function almostPalindrome(
  str: string,
  leftP = 0,
  rightP = str.length - 1
): boolean {
  if (str.length <= 1) return true;
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  while (leftP < rightP) {
    if (str[leftP] === str[rightP]) {
      leftP++;
      rightP--;
    } else
      return (
        validPalindrome(str, leftP + 1, rightP) ||
        validPalindrome(str, leftP, rightP - 1)
      );
  }
  return true;
}
