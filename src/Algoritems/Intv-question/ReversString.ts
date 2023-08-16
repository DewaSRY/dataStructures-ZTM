//create a function to reverst a string

export const reverse = (str: string): string => {
  const backwards = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
};
