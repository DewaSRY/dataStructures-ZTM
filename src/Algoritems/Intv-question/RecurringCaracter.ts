//return the first caracter have first same caracter
type ObjectMap = { [key: string]: boolean };
export function firstRecurringCharacterObject(Array: number[]) {
  let arrayMap: ObjectMap = {};
  for (let val of Array) {
    if (arrayMap[val]) {
      return val;
    } else {
      arrayMap[val] = true;
    }
  }
  throw new Error("there no value same");
}
export function firstRecurringCharacterNesting(Arr: number[]) {
  for (let i = 0; i < Arr.length; i++) {
    for (let j = i; j < Arr.length; j++) {
      if (i === j) continue;
      if (Arr[i] === Arr[j]) {
        return Arr[j];
      }
    }
  }
  throw new Error("no element have same value");
}
