export const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
export type NumberArray=number[]
export interface Swap {
   arr: NumberArray,
   left: number,
   right: number
}
export function swap(swap:Swap) {
    const {arr,left,right}=swap
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
export function  bubbleSort(array:number[]) {
    const {length} = array;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                swap({arr:array,left:j,right:j+1})
            }
        }
    }
    return array
}
