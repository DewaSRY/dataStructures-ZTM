//create a function to reverst a string

export const reverse=(str:string):string=>{
    const backwards = [];
    const lengthOfString = str.length - 1;
    for(let i = lengthOfString;i >=0; i--) {
        backwards.push(str[i])
    }
    return backwards.join('')
}