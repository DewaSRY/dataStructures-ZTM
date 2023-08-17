/**RadixSort
 *- Radix sort is a special sorting algorithm that works on
 *  lists of numbers
 *- it  never makes comparison between elements!
 *- it exploits the fact that information about size of
 *  number is encoded in the number of digits
 */
/**
 * ->Radix short works bay make 10 array as the sight of 
 * ten kind of pure number (9-0) to union the number,
 * first we look for the long of digits the num sequence
 * have,  then we make second iteration as long of digits,
 * then we put the number on the match bucked again and again 
 * until all iteration done, 
 * ->if we see the second iteration it iterate the longeNumDigits
 * use to match the bucket and the number the nestled iteration 
 * inside the second iteration use to iterate all number from 
 * array ant put the number on bucket
 *-> the leftPointer use to look the longest digits number
 -> the rightPointer use to put all number to they matcher buckets
 */
export function RadixSort(arr: number[]) {
  let maxLongNum = 0;
  for (let leftP = 0; leftP < arr.length; leftP++) {
    maxLongNum = Math.max(maxLongNum, getNumberOfDigits(arr[leftP]));
  }
  for (let indx = 0; indx < maxLongNum; indx++) {
    let buckets = Array.from({ length: 10 }, () => [] as number[]);
    for (let rightP = 0; rightP < arr.length; rightP++) {
      let digit = getDigit(arr[rightP], indx);
      buckets[digit].push(arr[rightP]);
    }
    arr = [].concat(...(buckets as [][]));
  }
  return arr;
}
function getDigit(num: number, place: number) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}
function getNumberOfDigits(num: number) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
