`
Given a string, find the length of the longest 
substring without repeating characters
//tes case
->is the substring contiguous ?
=>yes, look for a substring not a subsequence
->Dose case sensitivity meter?
=>No, assume all characters in the string are lowercase.
`;

// Time: O(N^2);
// Space: O(N)
`
=>Sliding window
Form a window over some portion of sequential data, 
then move that window throughout the data to capture 
different parts of it
`;
export const lengthOfLongestSubstring = (s: string) => {
  if (s.length <= 1) return s.length;
  let longest = 0;
  for (let left = 0; left < s.length; left++) {
    let seenChars: { [k: string]: boolean } = {},
      currentLength = 0;
    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];
      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break;
      }
    }
  }

  return longest;
};

export const lengthOfLongestSubstringSecond = (s: string) => {
  if (s.length <= 1) return s.length;

  const seen: { [k: string]: number } = {};
  let left = 0,
    longest = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previouslySeenChar = seen[currentChar];
    if (previouslySeenChar >= left) {
      left = previouslySeenChar + 1;
    }

    seen[currentChar] = right;

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};
