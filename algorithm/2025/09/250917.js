// 8kyu - Grasshopper - Array Mean

const findAverage = (nums) => {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

/**
 * best solution 
 * 
 * const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;
 *  */ 



const arr = [1, 2, 3, 4];
const result = arr.reduce((prev, curr) => prev + curr, 3);

console.log(result);
