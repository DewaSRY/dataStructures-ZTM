
type ArrayType=number[]|string
export function sortedTwoArrays(array1:ArrayType, array2:ArrayType) {
    let collection=[...array1,...array2]
    if(typeof array1 !== typeof array2)throw new Error('two value need to be same')
    const {length}=collection
    for(let range=0;range<length;range++){
        for(let idx=0;idx<length-range-1;idx++){
            if(collection[idx]<collection[idx+1]){
            const temp=collection[idx]
            collection[idx]=collection[idx+1]
            collection[idx+1]=temp
            }
        }
    }
    return collection;
}
