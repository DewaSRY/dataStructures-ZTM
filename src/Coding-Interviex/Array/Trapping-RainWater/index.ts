`
Given an array of integers representing an
elevation map where the width
of each bar is 1, return how much 
rainwater can be trapped
//test case
->Do the left and right sides of the graph count as walls? 
=>No, the sides are not walls
->Will there be negative integers ?
=>No, assume all integers are positive 
`;

export const getTrappedRainwater = function (heights: number[]) {
  let totalWater = 0;
  for (let p = 0; p < heights.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;
    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }
    while (rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }
    const currentWater = Math.min(maxLeft, maxRight) - heights[p];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};
// const elevationArray =
/*
1. Identify the pointer with the lesser value
2. Is this pointer value greater than or equal to max on that side
  yes -> update max on that side
  no -> get water for pointer, add to total
3. move pointer inwards
4. repeat for other pointer
 */
export const getTrappedRainwaterSecond = function (heights: number[]) {
  let left = 0,
    right = heights.length - 1,
    totalWater = 0,
    maxLeft = 0,
    maxRight = 0;
  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }
      right--;
    }
  }

  return totalWater;
};
