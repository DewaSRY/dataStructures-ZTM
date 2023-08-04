`
Given two string S and t, return if they equal 
when both are typed out, Any "#" that appears
in the string counts as a backspace
//test case
->What happens when two #'s appear beside each other?
=>Delete the two values before the first # 
->What happens to # when is no character to remove ?
=>It deletes nothing then, just like backspace would
->Are two empty strings equal to each other?
=>Yes, consider two empty string as equal
->Does case sensitivity matter ?
=>Yes it dose, "a" does not equal "A"
`;

const buildString = function (string: string) {
  const builtString = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== "#") {
      builtString.push(string[p]);
    } else {
      builtString.pop();
    }
  }
  return builtString;
};
export const backspaceCompare = (S: string, T: string) => {
  const finalS = buildString(S);
  const finalT = buildString(T);

  if (finalS.length !== finalT.length) {
    return false;
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }

  return true;
};
export const backspaceCompareSecond = function (S: string, T: string) {
  let p1 = S.length - 1,
    p2 = T.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === "#" || T[p2] === "#") {
      if (S[p1] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;
          if (S[p1] === "#") {
            backCount += 2;
          }
        }
      }
      if (T[p2] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (T[p2] === "#") {
            backCount += 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }

  return true;
};
export const backspaceCompareThree = (s: string, t: string) => {
  if (s === t) return true;
  let sIndex = s.length - 1;
  let tIndex = t.length - 1;
  let sCounter = 0;
  let tCounter = 0;
  while (sIndex >= 0 || tIndex >= 0) {
    if (s[sIndex] == "#") {
      sCounter++;
      sIndex--;
    } else if (t[tIndex] == "#") {
      tCounter++;
      tIndex--;
    } else if (sCounter) {
      sIndex--;
      sCounter--;
    } else if (tCounter) {
      tIndex--;
      tCounter--;
    } else if (s[sIndex] != t[tIndex]) return false;
    else {
      sIndex--;
      tIndex--;
    }
  }
  return true;
};
