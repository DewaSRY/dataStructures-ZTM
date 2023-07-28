
export const  factorialRecursive=(number:number) =>{
    if(number===1||number===0 || number <0)return 1
    return number * factorialRecursive(number - 1);
}

export const factorialIterative=(number:number) =>{
    let answer = 1;
    if(number===1 ||number===0||number <0)return 1
    for (let i = 2; i <= number; i++) {
      answer = answer * i;
    }
    return answer;
  }
