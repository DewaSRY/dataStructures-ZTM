`
you are given an array of positive integers where
each integer represent the height of a vertical
line on a chart. Find two lines which together with the 
z-axis forms a container that would hold the
greatest amount of water. return the area of water
it would hold
//Test case
->Dose the thickness of the lines affect the area=>No,assume they take up no space
->Do the left an right side of the graph count as walls? No, the side cannot be used to form a container
->Does a higher line inside our container affect our area=>No, Lines inside a container don't affect the area
`;

export function waterContainer(arr: number[]) {
  if (arr.length <= 1) return 0;
  let mostVolume = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    for (let nxt = 0; nxt < arr.length; nxt++) {
      if (
        idx !== nxt &&
        Math.min(arr[idx], arr[nxt]) * (nxt - idx) > mostVolume
      ) {
        // console.log(mostVolume);
        mostVolume = Math.min(arr[idx], arr[nxt]) * (nxt - idx);
        // console.log(arr[idx], arr[nxt + 1]);
      }
    }
  }
  return mostVolume;
}
`
time:O(n^2)
space:O(1)
`;
`
we need improve our code with new method 
`;
export function secondWaterContainer(arr: number[]) {
  let p1 = 0,
    p2 = arr.length - 1,
    maxArea = 0;
  while (p1 < p2) {
    const height = Math.min(arr[p1], arr[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if (arr[p1] <= arr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
}
