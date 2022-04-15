
let nums = [7,9,"hi",12,"hi", 7, 53];
// let uniqueNums = [...new Set(nums)];


function removeDup (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]){
        result.push(nums[j]);
      }
    }
  }
  return result;
}
